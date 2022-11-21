import React from 'react';

import MuiDialog from '@mui/material/Dialog';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogTitle from '@mui/material/DialogTitle';

import { StyledCrossButton } from 'src/ui/Modal/Modal.styled';

import Button from 'ui/Button/Button';
import { IDialogsProps } from 'ui/Modal/types';

const Modal = ({ onClose, title, children, onClickAction, open, ...props }: IDialogsProps) => {
  return (
    <MuiDialog open={open} onClose={onClose} {...props}>
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
