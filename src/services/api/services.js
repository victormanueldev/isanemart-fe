import { api } from '../../config';

export const fetchServices = (params) => {
  const query = new URLSearchParams();
  Object.entries(params).map(([key, value]) => {
    if (Array.isArray(value)) return value.map((item) => query.append(key, item));
    else return query.append(key, value);
  });
  return api.get(`/services/?${query}`);
};

export const fetchServiceByID = (id) => {
  return api.get(`/services/${id}`);
};

export const createService = (payload) => {
  return api.post('/services/', payload);
};

export const updateService = (id, payload) => {
  return api.patch(`/services/${id}`, payload);
};

export const updateStatusService = (id, payload) => {
  return api.patch(`/services/status/${id}`, payload);
};

export const deleteService = (id) => {
  return api.delete(`/services/${id}`);
};
