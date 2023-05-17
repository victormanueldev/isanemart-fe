import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import './BaseModal.css';

Modal.setAppElement('#root');
export const BaseModal = ({ children }) => {
  const { isModalOpen } = useSelector((state) => state.ui);

  return (
    <Modal
      isOpen={isModalOpen}
      className="modal"
      overlayClassName="modal-overlay"
      closeTimeoutMS={200}
    >
      {children}
    </Modal>
  );
};
