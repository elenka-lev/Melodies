import ReactModal from 'react-modal';
import { useEffect } from 'react';
import s from './Modal.module.css';

ReactModal.setAppElement('#root');

const Modal = ({ isOpen, onClose, children }) => {
  
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <button className={s.closeBtn} onClick={onClose}>
        ×
      </button>
      {children}
    </ReactModal>
  );
};

export default Modal;