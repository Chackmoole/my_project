import React, { useState } from 'react';
import {
  StyledAddUserBackdrop,
  StyledEditingUserModal,
} from 'components/EditingUserModal/EditingUserModal.styled';
import CrossButton from 'src/ui/CrossButton/CrossButton';
import { StyledH3, StyledModalActions } from 'components/AddUserModal/AddUserModal.styled';
import Button from 'src/ui/Button/Button';
import EditingUserForm from 'components/EditingUserForm/EditingUserForm';

const EditingUserModal = ({ isModalOpen, closeModal, currentUser }) => {
  const [editingFormValues, setEditingFormValues] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    mail: currentUser.mail,
  });

  if (!isModalOpen) {
    return null;
  }
  return (
    <StyledAddUserBackdrop onClick={closeModal}>
      <StyledEditingUserModal onClick={(e) => e.stopPropagation()}>
        <CrossButton onClick={closeModal} />
        <StyledH3>Редактирование пользователя</StyledH3>
        <EditingUserForm
          editingFormValues={editingFormValues}
          setEditingFormValues={setEditingFormValues}
        />
        <StyledModalActions>
          <Button onClick={closeModal} variant="outlined">
            Отменить
          </Button>
          <Button onClick={closeModal}>Сохранить</Button>
        </StyledModalActions>
      </StyledEditingUserModal>
    </StyledAddUserBackdrop>
  );
};

export default EditingUserModal;
