import {
  ModalContainer,
  ModalActions,
  ModalContentSection,
  ModalHeader,
} from "./Elements";
import Button from "../../shared/Button/Button";

const Modal = ({showed, closeModal, errorMessage}) => {
  return (
    <ModalContainer isShowed={showed} onClick={closeModal}>
      <ModalContentSection onClick={(event) => event.stopPropagation()}>
        <ModalHeader>
          <h2>{errorMessage[0]}</h2>
        </ModalHeader>
        <p>{errorMessage[1]}</p>
        <ModalActions>
          <Button onClick={closeModal}>Close</Button>
        </ModalActions>
      </ModalContentSection>
    </ModalContainer>
  );
};

export default Modal;
