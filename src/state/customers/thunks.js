import { setCustomer, setCustomers, setLoading } from './customersSlice';
import { fetchCustomers, createCustomer, fetchCustomerById } from '../../services';
import { closeToast, showToast } from '../ui';

export const startFetchingCustomers = () => {
  return async (dispatch) => {
    dispatch(toggleLoading());
    try {
      const result = await fetchCustomers();
      dispatch(setCustomers(result.data));
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

export const startFetchingCustomerById = ({ id }) => {
  return async (dispatch) => {
    dispatch(toggleLoading());
    try {
      const result = await fetchCustomerById(id);
      dispatch(setCustomers(result.data));
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

export const startCreatingCustomer = (payload) => {
  return async (dispatch) => {
    dispatch(toggleLoading());
    try {
      console.log(payload);
      const result = await createCustomer(payload);
      dispatch(setCustomer(result.data));
      const autoHideTimeoutId = setTimeout(() => {
        dispatch(closeToast());
      }, 6000);
      dispatch(
        showToast({
          message: 'El cliente fue creado existosamente',
          bgColor: 'bg-green-500',
          type: 'danger',
          autoHide: autoHideTimeoutId,
        })
      );
    } catch (error) {
      console.log(error);
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
