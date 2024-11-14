import { createPortal } from 'react-dom';
import Styles from './confirmationModal.module.css'; // Import the CSS module
function ModalOverlay({ children }) {
  return createPortal(
    <div className={Styles.modal_overlay}>{children}</div>,
    document.body
  );
}

export default ModalOverlay;
