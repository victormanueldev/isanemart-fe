import { api } from '../../config';

export const login = (payload) => {
  return api.post('/auth/login', payload, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
};

export const refreshToken = (payload) => {
  return api.post('/auth/refresh', payload);
};

export const fetchUserMe = () => {
  return api.get('/users/me');
};
