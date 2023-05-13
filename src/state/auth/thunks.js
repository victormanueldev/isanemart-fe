import { login, checkingCredentials } from './authSlice';
import { login as loginService } from '../../services';

export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    try {
      const result = await loginService({ email, password });
      console.log(result);
      dispatch(login(result));
    } catch (err) {
      console.log(err);
    }
  };
};
