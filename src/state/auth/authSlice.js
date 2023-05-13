import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated',
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
      state.status = 'authtenticated';
      state.id = payload.id;
      state.email = payload.email;
      state.fullName = payload.fullName;
      state.isActive = payload.isActive;
      state.isTechnician = payload.isTechnician;
      state.isCustomer = payload.isCustomer;
      state.isSuperuser = payload.isSuperuser;
      state.color = payload.color;
      state.initials = payload.initials;
    },
    logout: (state, { payload }) => {
      state.status = 'not-authtenticated';
      state.id = payload.id;
      state.email = payload.email;
      state.fullName = payload.fullName;
      state.isActive = payload.isActive;
      state.isTechnician = payload.isTechnician;
      state.isCustomer = payload.isCustomer;
      state.isSuperuser = payload.isSuperuser;
      state.color = payload.color;
      state.initials = payload.initials;
      state.error = payload.error;
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
