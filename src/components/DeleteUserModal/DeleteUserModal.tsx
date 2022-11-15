import React from 'react';

import Typography from '@mui/material/Typography';

import { IUser } from 'src/types';
import Modal from 'src/ui/Modal/Modal';

import { StyledAllotted } from 'components/DeleteUserModal/DeleteUserModal.styled';

interface IProps {
  isModalOpen: boolean;
  onClose: () => void;
  currentUser: IUser;
}

const DeleteUserModal = ({ isModalOpen, onClose, currentUser }: IProps) => {
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
