import React from 'react';
import Button from 'src/ui/Button/Button';
import CrossButton from 'src/ui/CrossButton/CrossButton';
import {
  StyledAllotted,
  StyledDeleteUserBackdrop,
  StyledDeleteUserModal,
  StyledH3,
  StyledModalActions,
  StyledText,
} from 'components/DeleteUserModal/DeleteUserModal.styled';

const DeleteUserModal = ({ isModalOpen, closeModal, currentUser }) => {
  const printFormData = () => {
    console.log(currentUser.id);
    closeModal();
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <>
      <StyledDeleteUserBackdrop onClick={closeModal}>
        <StyledDeleteUserModal onClick={(e) => e.stopPropagation()}>
          <CrossButton onClick={closeModal} />
          <StyledH3>Удаление пользователя</StyledH3>
          <StyledText>
            Вы действительно хотите удалить пользователя{' '}
            <StyledAllotted>
              {currentUser.firstName} {currentUser.lastName}?
            </StyledAllotted>
          </StyledText>
          <StyledModalActions>
            <Button onClick={closeModal} variant="outlined">
              Отменить
            </Button>
            <Button onClick={printFormData}>Удалить</Button>
          </StyledModalActions>
        </StyledDeleteUserModal>
      </StyledDeleteUserBackdrop>
    </>
  );
};

export default DeleteUserModal;
