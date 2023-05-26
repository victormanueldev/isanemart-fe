import { fetchUsers } from '../../services';
import { closeToast, showToast } from '../ui';
import { hideUser, parseServicesToEvents, setLoading, setUsers, showUser } from './usersSlice';

export const startFetchingUsers = (params) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const result = await fetchUsers(params);
      dispatch(setUsers(result.data));
      dispatch(parseServicesToEvents());
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

export const toggleUserShow = (id, action) => {
  return (dispatch) => {
    if (action === 'show') {
      dispatch(showUser({ id }));
      dispatch(parseServicesToEvents());
    } else {
      dispatch(hideUser({ id }));
      dispatch(parseServicesToEvents());
    }
  };
};

export const toggleLoading = () => {
  return (dispatch) => {
    dispatch(setLoading());
  };
};
