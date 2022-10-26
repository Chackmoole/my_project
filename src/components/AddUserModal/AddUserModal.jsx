import React from 'react';
import { StyledAddUserModal } from 'components/AddUserModal/AddUserModal.styled';
import Button from 'src/ui/Button/Button';
import CrossButton from 'src/ui/CrossButton/CrossButton';

const AddUserModal = ({ isModalOpen, closeModal }) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    <StyledAddUserModal>
      <CrossButton onClick={closeModal} />
      <p>modal window</p>
      <Button onClick={closeModal}>Сохранить</Button>
    </StyledAddUserModal>
  );
};

export default AddUserModal;
