import { createSlice } from '@reduxjs/toolkit';

export const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    services: [],
    isLoading: false,
    service: {},
  },
  reducers: {
    setServices: (state, { payload }) => {
      state.services = payload;
      state.isLoading = false;
    },
    setService: (state, { payload }) => {
      state.service = payload;
      state.isLoading = false;
    },
    setLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { setServices, setService, setLoading } = servicesSlice.actions;
