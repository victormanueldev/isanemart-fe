import { login, checkingCredentials, setAccessToken, logout } from './authSlice';
import { login as loginService, fetchUserMe } from '../../services';
import { closeToast, showToast } from '../ui';

export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    try {
      const result = await loginService({ username: email, password });
      dispatch(setAccessToken(result.data));
      dispatch(startUserMe());
    } catch (err) {
      const message = err.response ? err.response.data.detail : err.message;
      dispatch(logout({ detail: message }));
      const autoHideTimeoutId = setTimeout(() => {
        dispatch(closeToast());
      }, 6000);
      dispatch(
        showToast({
          message: message,
          bgColor: 'bg-red-500',
          type: 'danger',
          autoHide: autoHideTimeoutId,
        })
      );
    }
  };
};

export const startUserMe = () => {
  return async (dispatch) => {
    try {
      const result = await fetchUserMe();
      dispatch(login(result.data));
    } catch (error) {
      console.log(error);
      dispatch(logout(error.response.data));
    }
  };
};
