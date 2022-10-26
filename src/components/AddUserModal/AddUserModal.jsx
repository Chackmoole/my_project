import React from 'react';
import {
  StyledAddUserBackdrop,
  StyledAddUserModal,
} from 'components/AddUserModal/AddUserModal.styled';
import Button from 'src/ui/Button/Button';
import CrossButton from 'src/ui/CrossButton/CrossButton';

const AddUserModal = ({ isModalOpen, closeModal }) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    <>
      <StyledAddUserBackdrop onClick={closeModal}>
        <StyledAddUserModal onClick={(e) => e.stopPropagation()}>
          <CrossButton onClick={closeModal} />
          <p>modal window</p>
          <Button onClick={closeModal}>Сохранить</Button>
        </StyledAddUserModal>
      </StyledAddUserBackdrop>
    </>
  );
};

export default AddUserModal;
