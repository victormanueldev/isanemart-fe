import { createSlice } from '@reduxjs/toolkit';

export const customersSlice = createSlice({
  name: 'customers',
  initialState: {
    customers: [],
    isLoading: false,
    customer: {},
    creatingCustomerSuccess: false,
  },
  reducers: {
    setCustomers: (state, { payload }) => {
      state.customers = payload;
      state.isLoading = false;
    },
    setCustomer: (state, { payload }) => {
      state.customer = payload;
      state.isLoading = false;
      state.creatingCustomerSuccess = true;
    },
    setLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { setCustomers, setCustomer, setLoading } = customersSlice.actions;
