import React from 'react';

import Typography from '@mui/material/Typography';

import Modal from 'src/ui/Modal/Modal';

import { StyledAllotted } from 'components/DeleteUserModal/DeleteUserModal.styled';

const DeleteUserModal = ({ isModalOpen, onClose, currentUser }) => {
  const printFormData = () => {
    console.log(currentUser.id);
    onClose();
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <Modal
      onClickAction={printFormData}
      onClose={onClose}
      title="Удаление пользователя"
      open={isModalOpen}
    >
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