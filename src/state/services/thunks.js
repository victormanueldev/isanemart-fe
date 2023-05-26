import { setLoading, setService, setServices, setUnassignedServices } from './servicesSlice';
import {
  fetchServices,
  fetchServiceByID,
  updateService,
  createService,
  updateStatusService,
} from '../../services';
import { closeToast, showToast, toggleModal } from '../ui';
import { startFetchingUsers } from '../users';
import { startFetchingCustomerById } from '../customers';
import { startFetchinHeadquarterById } from '../headquarters';
import { startFetchingAreasByCustomer } from '../areas';

export const startFetchServices = (params) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const result = await fetchServices(params);
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
      dispatch(startFetchingCustomerById(result.data.customer_id));
      if (result.data?.headquarter_id) {
        dispatch(startFetchinHeadquarterById(result.data.headquarter_id));
        dispatch(
          startFetchingAreasByCustomer({
            customer_id: result.data.customer_id,
            headquarter_id: result.data?.headquarter_id,
          })
        );
      }
      dispatch(
        startFetchingAreasByCustomer({
          customer_id: result.data.customer_id,
        })
      );
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

export const startFetchingUnassignedServices = (params) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const result = await fetchServices(params);
      dispatch(setUnassignedServices(result.data));
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

export const startUpdatingServiceById = (id, payload) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      await updateService(id, payload);
      dispatch(startFetchingUnassignedServices({ status: 'Previsto' }));
      dispatch(startFetchingUsers({ is_technician: true }));
      dispatch(toggleModal());
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

export const startUpdatinStatusServiceById = (id, payload) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      await updateStatusService(id, payload);
      dispatch(startFetchingServiceById(id));
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

export const startCreatingService = (payload) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const result = await createService(payload);
      dispatch(setService(result.data));
      dispatch(startFetchingUsers({ is_technician: true }));
      dispatch(toggleModal());
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
