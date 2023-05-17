import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    toastType: null,
    toastOpen: false,
    toastBgColor: null,
    toastMessage: null,
    autoHideTimeout: null,
    isModalOpen: false,
  },
  reducers: {
    closeToast: (state /* action */) => {
      state.toastOpen = false;
      clearTimeout(state.autoHideTimeout);
      state.autoHideTimeout = null;
    },
    showToast: (state, { payload }) => {
      state.toastOpen = true;
      state.toastType = payload.type;
      state.toastBgColor = payload.bgColor;
      state.toastMessage = payload.message;
      state.autoHideTimeout = payload.autoHide;
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { closeToast, showToast, toggleModal } = uiSlice.actions;
