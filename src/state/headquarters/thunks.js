import { closeToast, showToast } from '../ui';
import { fetchHeadquarterById, fetchHeadquarters } from '../../services';
import { setHeadquarter, setHeadquarters, setLoading } from './headquartersSlice';

export const startFetchingHeadquarters = () => {
  return async (dispatch) => {
    dispatch(toggleLoading());
    try {
      const result = await fetchHeadquarters();
      dispatch(setHeadquarters(result.data));
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

export const startFetchinHeadquarterById = (id) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const result = await fetchHeadquarterById(id);
      dispatch(setHeadquarter(result.data));
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
