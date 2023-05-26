import { createSlice } from '@reduxjs/toolkit';

export const areasSlice = createSlice({
  name: 'areas',
  initialState: {
    area: {},
    isLoadingArea: false,
    areas: [],
  },
  reducers: {
    setAreas: (state, { payload }) => {
      state.areas = payload;
      state.isLoadingArea = false;
    },
    setArea: (state, { payload }) => {
      state.area = payload;
      state.isLoadingArea = false;
    },
    setLoading: (state) => {
      state.isLoadingArea = !state.isLoadingArea;
    },
  },
});

export const { setAreas, setArea, setLoading } = areasSlice.actions;
