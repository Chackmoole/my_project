import React from 'react';
import { StyledAllotted, StyledText } from 'components/DeleteUserModal/DeleteUserModal.styled';
import Modal from 'src/ui/Modal/Modal';

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
      <StyledText>
        Вы действительно хотите удалить пользователя{' '}
        <StyledAllotted>
          {currentUser.firstName} {currentUser.lastName}?
        </StyledAllotted>
      </StyledText>
    </Modal>
  );
};

export default DeleteUserModal;
