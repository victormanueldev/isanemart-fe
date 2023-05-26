import { createSlice } from '@reduxjs/toolkit';

export const documentsSlice = createSlice({
  name: 'documents',
  initialState: {
    documents: [],
    isLoadingDocuments: false,
    document: {},
  },
  reducers: {
    setDocuments: (state, { payload } /* action */) => {
      state.documents = payload;
      state.isLoadingDocuments = false;
    },
    setDocument: (state, { payload }) => {
      state.document = payload;
      state.isLoadingDocuments = false;
    },
    setLoading: (state) => {
      state.isLoadingDocuments = !state.isLoadingDocuments;
    },
  },
});

export const { setDocuments, setDocument, setLoading } = documentsSlice.actions;
