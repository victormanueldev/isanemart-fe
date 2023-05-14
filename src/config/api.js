import axios from 'axios';
import { getEnvironmentVariables } from './getEnv';

const { VITE_APP_API_URL } = getEnvironmentVariables();

const api = axios.create({
  baseURL: VITE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');

    if (token && !['/auth/login', '/auth/logout', '/auth/refresh'].includes(config.url)) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    let originalRequest = err.config;
    let error = err.response || err;

    if (error?.status === 401) {
      originalRequest._retry = true;

      return new Promise((resolve, reject) => {
        const payload = {
          refresh_token: localStorage.getItem('refresh_token'),
          enabled: true,
        };
        api
          .post('/auth/refresh', payload, {
            headers: { Authorization: `Bearer ${payload.refresh_token}` },
          })
          .then((response) => {
            localStorage.setItem('access_token', response?.data?.access_token || '');
            localStorage.setItem('refresh_token', response?.data?.refresh_token || '');
            resolve(api(originalRequest));
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
    return Promise.reject(err);
  }
);

export { api };
