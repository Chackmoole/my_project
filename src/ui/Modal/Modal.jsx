import React from 'react';
import CrossButton from 'src/ui/CrossButton/CrossButton';
import Button from 'src/ui/Button/Button';
import MuiDialog from '@mui/material/Dialog';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';

const Modal = ({ closeModal, title, children, onClickAction, open }) => {
  return (
    <MuiDialog open={open}>
      <CrossButton onClick={closeModal} />
      <MuiDialogTitle variant="h6" mb="24px">
        {title}
      </MuiDialogTitle>
      <MuiDialogContent>{children}</MuiDialogContent>
      <MuiDialogActions sx={{ justifyContent: 'center', pb: '16px' }}>
        <Button onClick={closeModal} variant="outlined">
          Отменить
        </Button>
        <Button onClick={onClickAction}>Сохранить</Button>
      </MuiDialogActions>
    </MuiDialog>
  );
};

export default Modal;
