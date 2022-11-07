import React from 'react';
import CrossButton from 'src/ui/CrossButton/CrossButton';
import { StyledModal } from 'src/ui/Modal/Modal.styled';
import Button from 'src/ui/Button/Button';
import Box from '@mui/material/Box';
import MuiDialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

const Dialog = ({ closeModal, title, children, onClickAction, open }) => {
  return (
    <MuiDialog onClick={closeModal} open={open}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <CrossButton onClick={closeModal} />
        <DialogTitle variant="h6" mb="24px">
          {title}
        </DialogTitle>
        {children}
        <Box display="flex" gap="24px">
          <Button onClick={closeModal} variant="outlined">
            Отменить
          </Button>
          <Button onClick={onClickAction}>Сохранить</Button>
        </Box>
      </StyledModal>
    </MuiDialog>
  );
};

export default Dialog;
