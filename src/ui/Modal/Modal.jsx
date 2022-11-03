import React from 'react';
import CrossButton from 'src/ui/CrossButton/CrossButton';
import { StyledModal, StyledModalBackdrop, StyledModalActions } from 'src/ui/Modal/Modal.styled';
import Button from 'src/ui/Button/Button';
import Typography from '@mui/material/Typography';

const Modal = ({ closeModal, title, children, onClickAction }) => {
  return (
    <StyledModalBackdrop onClick={closeModal}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <CrossButton onClick={closeModal} />
        <Typography variant="h6" mb="24px">
          {title}
        </Typography>
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
