import { fetchTreatments } from '../../services';
import { closeToast, showToast } from '../ui';
import { setLoading, setTreatments } from './treatmentsSlice';

export const startFetchinTreatments = (params) => {
  return async (dispatch) => {
    dispatch(toggleLoading());
    try {
      const result = await fetchTreatments(params);
      dispatch(setTreatments(result.data));
    } catch (error) {
      dispatch(toggleLoading());
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
