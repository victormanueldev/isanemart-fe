import { createSlice } from '@reduxjs/toolkit';
import { substractHours } from '../../utils';

export const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    services: [],
    unassignedServices: [],
    isLoading: false,
    service: {},
  },
  reducers: {
    setServices: (state, { payload }) => {
      state.services = payload.map((service) => {
        return {
          ...service,
          expected_date: substractHours(service.expected_date, 5),
        };
      });
      state.isLoading = false;
    },
    setService: (state, { payload }) => {
      state.service = payload;
      state.isLoading = false;
    },
    setUnassignedServices: (state, { payload }) => {
      state.unassignedServices = payload;
      state.isLoading = false;
    },
    setLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { setServices, setService, setUnassignedServices, setLoading } = servicesSlice.actions;
