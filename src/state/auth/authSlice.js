import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated',
    isAuthenticated: false,
    id: null,
    email: null,
    fullName: null,
    isActive: false,
    isTechnician: false,
    isCustomer: false,
    isSuperuser: false,
    color: null,
    initials: null,
    error: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticated';
      state.isAuthenticated = true;
      state.id = payload.id;
      state.email = payload.email;
      state.fullName = payload.full_name;
      state.isActive = payload.is_active;
      state.isTechnician = payload.is_technician;
      state.isCustomer = payload.is_customer;
      state.isSuperuser = payload.is_superuser;
      state.color = payload.color;
      // Generate Initials
      state.initials = null;
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.isAuthenticated = true;
      state.id = null;
      state.email = null;
      state.fullName = null;
      state.isActive = null;
      state.isTechnician = null;
      state.isCustomer = null;
      state.isSuperuser = null;
      state.color = null;
      state.initials = null;
      state.error = payload.detail;
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    },
    setAccessToken: (state, { payload }) => {
      localStorage.setItem('access_token', payload.access_token);
      localStorage.setItem('refresh_token', payload.refresh_token);
    },
  },
});

export const { login, logout, checkingCredentials, setAccessToken } = authSlice.actions;
