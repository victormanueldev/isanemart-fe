import { showToast, closeToast, toggleModal } from './uiSlice';

export const startShowToast = ({ message, type, bgColor }) => {
  return (dispatch) => {
    dispatch(showToast({ message, type, bgColor }));
  };
};

export const startCloseToast = () => {
  return (dispatch) => {
    dispatch(closeToast());
  };
};

export const handleToggleModal = () => {
  return (dispatch) => {
    dispatch(toggleModal());
  };
};
