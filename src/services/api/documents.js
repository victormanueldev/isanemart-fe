import { api } from '../../config';

export const fetchDocuments = (params) => {
  const query = new URLSearchParams();
  Object.entries(params).map(([key, value]) => {
    if (Array.isArray(value)) return value.map((item) => query.append(key, item));
    else return query.append(key, value);
  });
  return api.get(`/documents/?${query}`);
};

export const createDocument = (payload) => {
  return api.post(`/documents/`, payload);
};

export const updateDocument = (id, payload) => {
  return api.patch(`/documents/${id}`, payload);
};
