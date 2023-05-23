import { api } from '../../config';

export const fetchServices = () => {
  return api.get('/services/');
};

export const fetchServiceByID = (id) => {
  return api.get(`/services/${id}`);
};

export const createService = (payload) => {
  return api.post('/services/', payload);
};

export const updateService = (id, payload) => {
  return api.path(`/services/${id}`, payload);
};

export const deleteService = (id) => {
  return api.delete(`/services/${id}`);
};
