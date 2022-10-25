import React from 'react';
import { StyledAddUserModal } from 'components/AddUserModal/AddUserModal.styled';
import SaveUserButton from 'components/SaveUserButton/SaveUserButton';

const AddUserModal = ({ isModalOpen, closeModal }) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    <StyledAddUserModal>
      <p>modal window</p>
      <SaveUserButton closeModal={closeModal}>Сохранить</SaveUserButton>
    </StyledAddUserModal>
  );
};

export default AddUserModal;
