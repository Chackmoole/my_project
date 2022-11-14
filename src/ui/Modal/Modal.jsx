import React from 'react';

import MuiDialog from '@mui/material/Dialog';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogTitle from '@mui/material/DialogTitle';

import Button from 'src/ui/Button/Button';
import { StyledCrossButton } from 'src/ui/Modal/Modal.styled';

const Modal = ({ onClose, title, children, onClickAction, open }) => {
  return (
    <MuiDialog open={open} onClose={onClose}>
      <StyledCrossButton onClick={onClose} />
      <MuiDialogTitle variant="h6" mb="24px">
        {title}
      </MuiDialogTitle>
      <MuiDialogContent>{children}</MuiDialogContent>
      <MuiDialogActions sx={{ justifyContent: 'center', pb: '16px' }}>
        <Button onClick={onClose} variant="outlined">
          Отменить
        </Button>
        <Button onClick={onClickAction}>Сохранить</Button>
      </MuiDialogActions>
    </MuiDialog>
  );
};

export default Modal;
