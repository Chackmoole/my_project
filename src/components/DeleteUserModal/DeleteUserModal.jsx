import React from 'react';
import { StyledAllotted } from 'components/DeleteUserModal/DeleteUserModal.styled';
import Modal from 'src/ui/Modal/Modal';
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
    <Modal onClickAction={printFormData} closeModal={closeModal} title="Удаление пользователя">
      <Typography mb="36px">
        Вы действительно хотите удалить пользователя{' '}
        <StyledAllotted>
          {currentUser.firstName} {currentUser.lastName}?
        </StyledAllotted>
      </Typography>
    </Modal>
  );
};

export default DeleteUserModal;
