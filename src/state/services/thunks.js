import { setLoading, setService, setServices } from './servicesSlice';
import { fetchServices, fetchServiceByID } from '../../services';
import { closeToast, showToast } from '../ui';

export const startFetchServices = () => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const result = await fetchServices();
      dispatch(setServices(result.data));
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

export const startFetchingServiceById = (id) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const result = await fetchServiceByID(id);
      dispatch(setService(result.data));
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
