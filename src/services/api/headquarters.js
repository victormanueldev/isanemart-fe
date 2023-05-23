import { api } from '../../config';

export const fetchHeadquarters = () => {
  return api.get('/headquarters/');
};

export const fetchHeadquarterById = (id) => {
  return api.get(`/headquarters/${id}`);
};

export const createHeadquarter = (payload) => {
  return api.post(`/headquarters/`, payload);
};

export const updateHeaduqarter = (id, payload) => {
  return api.patch(`/headquarters/${id}`, payload);
};
