import { createSlice } from '@reduxjs/toolkit';

export const treatmentsSlice = createSlice({
  name: 'treatments',
  initialState: {
    treatments: [],
    isLoadingTreatments: false,
    treatment: {},
  },
  reducers: {
    setTreatments: (state, { payload }) => {
      state.treatments = payload;
      state.isLoadingTreatments = false;
    },
    setTreatment: (state, { payload }) => {
      state.treatment = payload;
      state.isLoadingTreatments = false;
    },
    setLoading: (state) => {
      state.isLoadingTreatments = !state.isLoadingTreatments;
    },
  },
});

export const { setTreatments, setTreatment, setLoading } = treatmentsSlice.actions;
