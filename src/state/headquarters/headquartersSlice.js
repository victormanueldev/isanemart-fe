import { createSlice } from '@reduxjs/toolkit';

export const headquartersSlice = createSlice({
  name: 'headquarters',
  initialState: {
    headquarters: [],
    isLoading: false,
    headquarter: {},
    creatingHeadquarterSuccess: false,
  },
  reducers: {
    setHeadquarters: (state, { payload }) => {
      state.headquarters = payload;
      state.isLoading = false;
    },
    setHeadquarter: (state, { payload }) => {
      state.headquarter = payload;
      state.isLoading = false;
      state.creatingHeadquarterSuccess = true;
    },
    setLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { setHeadquarters, setHeadquarter, setLoading } = headquartersSlice.actions;
