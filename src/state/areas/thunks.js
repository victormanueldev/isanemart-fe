import { fetchAreaByCustomer } from '../../services';
import { closeToast, showToast } from '../ui';
import { setArea, setAreas, setLoading } from './areasSlice';

export const startFetchingAreasByCustomer = (params) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const result = await fetchAreaByCustomer(params);
      dispatch(setAreas(result.data));
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
