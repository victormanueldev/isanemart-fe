import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { customersSlice } from './customers';
import { uiSlice } from './ui';
import { headquartersSlice } from './headquarters';
import { servicesSlice } from './services';
import { usersSlice } from './users';
import { treatmentsSlice } from './treatments';
import { areasSlice } from './areas/areasSlice';
import { documentsSlice } from './documents/documentsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    customers: customersSlice.reducer,
    headquarters: headquartersSlice.reducer,
    services: servicesSlice.reducer,
    users: usersSlice.reducer,
    treatments: treatmentsSlice.reducer,
    areas: areasSlice.reducer,
    documents: documentsSlice.reducer,
  },
});
