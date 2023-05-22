import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { customersSlice } from './customers';
import { uiSlice } from './ui';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    customers: customersSlice.reducer,
  },
});
