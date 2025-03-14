import useNoUnderneathScroll from '../hooks/useNoUnderneathScroll';
import Styles from './confirmationModal.module.css';
import LoaderMini from './LoaderMini';
import ModalOverlay from './ModalOverlay';

function ConfirmationModal({ children }) {
  useNoUnderneathScroll();

  return (
    <ModalOverlay>
      <div className={Styles.modal}>{children}</div>
    </ModalOverlay>
  );
}

function ConfirmationRequest({ text }) {
  return <h2 className={Styles.modal_heading}>{text}</h2>;
}

function Buttons({ children }) {
  return <div className={Styles.modal_buttons}>{children}</div>;
}

function Button({ text, onClick, type, isLoading }) {
  return (
    <button className={`${Styles.button} ${Styles[type]}`} onClick={onClick}>
      {isLoading ? (
        <span className="center_spinner">
          {text} <LoaderMini />
        </span>
      ) : (
        text
      )}
    </button>
  );
}

ConfirmationModal.ConfirmationRequest = ConfirmationRequest;
ConfirmationModal.Buttons = Buttons;
ConfirmationModal.Button = Button;

export default ConfirmationModal;
