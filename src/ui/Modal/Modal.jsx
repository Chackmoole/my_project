import React from 'react';
import CrossButton from 'src/ui/CrossButton/CrossButton';
import {
  StyledH3,
  StyledModal,
  StyledModalBackdrop,
  StyledModalActions,
} from 'src/ui/Modal/Modal.styled';
import Button from 'src/ui/Button/Button';

const Modal = ({ closeModal, title, children, onClickAction }) => {
  return (
    <StyledModalBackdrop onClick={closeModal}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <CrossButton onClick={closeModal} />
        <StyledH3>{title}</StyledH3>
        {children}
        <StyledModalActions>
          <Button onClick={closeModal} variant="outlined">
            Отменить
          </Button>
          <Button onClick={onClickAction}>Сохранить</Button>
        </StyledModalActions>
      </StyledModal>
    </StyledModalBackdrop>
  );
};

export default Modal;
