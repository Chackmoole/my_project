import React from 'react';
import { StyledAddUserModal } from 'components/AddUserModal/AddUserModal.styled';
import Button from 'src/ui/Button/Button';

const AddUserModal = ({ isModalOpen, closeModal }) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    <StyledAddUserModal>
      <p>modal window</p>
      <Button onClick={closeModal}>Сохранить</Button>
    </StyledAddUserModal>
  );
};

export default AddUserModal;
