import { api } from '../../config';

export const fetchUsers = (params) => {
  const query = new URLSearchParams();
  Object.entries(params).map(([key, value]) => {
    if (Array.isArray(value)) return value.map((item) => query.append(key, item));
    else return query.append(key, value);
  });
  return api.get(`/users/?${query}`);
};
