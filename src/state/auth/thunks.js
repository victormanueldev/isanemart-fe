import { login, checkingCredentials, setAccessToken, logout } from './authSlice';
import { login as loginService, fetchUserMe } from '../../services';

export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    try {
      const result = await loginService({ username: email, password });
      dispatch(setAccessToken(result.data));
      dispatch(startUserMe());
    } catch (err) {
      console.log(err);
      dispatch(logout(err.data));
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
      dispatch(logout(error.data));
    }
  };
};
