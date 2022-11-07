import React from 'react';
import { StyledAllotted } from 'components/DeleteUserModal/DeleteUserModal.styled';
import Dialog from 'src/ui/Modal/Dialog';
import Typography from '@mui/material/Typography';

const DeleteUserModal = ({ isModalOpen, closeModal, currentUser }) => {
  const printFormData = () => {
    console.log(currentUser.id);
    closeModal();
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <Dialog
      onClickAction={printFormData}
      closeModal={closeModal}
      title="Удаление пользователя"
      open={isModalOpen}
    >
      <Typography mb="36px">
        Вы действительно хотите удалить пользователя{' '}
        <StyledAllotted>
          {currentUser.firstName} {currentUser.lastName}?
        </StyledAllotted>
      </Typography>
    </Dialog>
  );
};

export default DeleteUserModal;
