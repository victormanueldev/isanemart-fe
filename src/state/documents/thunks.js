import { createDocument, fetchDocuments } from '../../services';
import { closeToast, showToast } from '../ui';
import { setDocument, setDocuments, setLoading } from './documentsSlice';

export const startFetchingDocuments = (params) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const result = await fetchDocuments(params);
      dispatch(setDocuments(result.data));
    } catch (error) {
      const message = error.response ? error.response.data.detail : error.message;
      const autoHideTimeoutId = setTimeout(() => {
        dispatch(closeToast());
      }, 6000);
      dispatch(
        showToast({
          message: JSON.stringify(message),
          bgColor: 'bg-red-500',
          type: 'danger',
          autoHide: autoHideTimeoutId,
        })
      );
    }
  };
};

export const startCreatingDocument = (payload) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const result = await createDocument(payload);
      dispatch(setDocument(result.data));
      dispatch(startFetchingDocuments({}));
    } catch (error) {
      const message = error.response ? error.response.data.detail : error.message;
      const autoHideTimeoutId = setTimeout(() => {
        dispatch(closeToast());
      }, 6000);
      dispatch(
        showToast({
          message: JSON.stringify(message),
          bgColor: 'bg-red-500',
          type: 'danger',
          autoHide: autoHideTimeoutId,
        })
      );
    }
  };
};

export const toggleLoading = () => {
  return (dispatch) => {
    dispatch(setLoading());
  };
};
