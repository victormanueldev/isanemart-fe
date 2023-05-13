import { api } from '../../config';

export const login = (payload) => {
  return api.post('/auth/login', payload);
};

export const refreshToken = (payload) => {
  return api.post('/auth/refresh', payload);
};
