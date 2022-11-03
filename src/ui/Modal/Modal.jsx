import React from 'react';
import CrossButton from 'src/ui/CrossButton/CrossButton';
import { StyledModal, StyledModalBackdrop } from 'src/ui/Modal/Modal.styled';
import Button from 'src/ui/Button/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Modal = ({ closeModal, title, children, onClickAction }) => {
  return (
    <StyledModalBackdrop onClick={closeModal}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <CrossButton onClick={closeModal} />
        <Typography variant="h6" mb="24px">
          {title}
        </Typography>
        {children}
        <Box display="flex" gap="24px">
          <Button onClick={closeModal} variant="outlined">
            Отменить
          </Button>
          <Button onClick={onClickAction}>Сохранить</Button>
        </Box>
      </StyledModal>
    </StyledModalBackdrop>
  );
};

export default Modal;
