import {
  ModalContainer,
  ModalActions,
  ModalContentSection,
  ModalHeader,
} from "./Elements";

const Modal = (props) => {
  return (
    <ModalContainer isShowed={props.showed} onClick={props.closeModal}>
      <ModalContentSection onClick={(event) => event.stopPropagation()}>
        <ModalHeader>
          <h2>{props.errorMessage[0]}</h2>
        </ModalHeader>
        <p>{props.errorMessage[1]}</p>
        <ModalActions>
          <button onClick={props.closeModal}>Close</button>
        </ModalActions>
      </ModalContentSection>
    </ModalContainer>
  );
};

export default Modal;
