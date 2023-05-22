import { api } from '../../config';

export const fetchCustomers = () => {
  return api.get('/customers/');
};

export const fetchCustomerById = (id) => {
  return api.get(`/customers/${id}`);
};

export const createCustomer = (payload) => {
  return api.post('/customers/', payload);
};

export const updateCustomer = (id, payload) => {
  return api.patch(`/customers/${id}`, payload);
};

export const deleteCustomer = (id) => {
  return api.delete(`/customers/${id}`);
};
