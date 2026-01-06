import ReactModal from 'react-modal';
import { useEffect } from 'react';
import s from './Modal.module.css';

ReactModal.setAppElement('#root');

const Modal = ({ isOpen, onClose, children, variant = 'auth' }) => {
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const variantClass = variant === 'track' ? s.trackVariant : s.authVariant;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={`${s.modal} ${variantClass}`}
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