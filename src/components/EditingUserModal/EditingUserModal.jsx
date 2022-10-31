import React, { useState } from 'react';
import {
  StyledAddUserBackdrop,
  StyledEditingUserModal,
  StyledH3,
  StyledModalActions,
} from 'components/EditingUserModal/EditingUserModal.styled';
import CrossButton from 'src/ui/CrossButton/CrossButton';
import Button from 'src/ui/Button/Button';
import EditingUserForm from 'components/EditingUserForm/EditingUserForm';

const EditingUserModal = ({ isModalOpen, closeModal, currentUser }) => {
  const [editingFormValues, setEditingFormValues] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    mail: currentUser.mail,
  });

  const printEditionalUser = () => {
    console.log(editingFormValues);
    closeModal();
  };

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
          <Button onClick={printEditionalUser}>Сохранить</Button>
        </StyledModalActions>
      </StyledEditingUserModal>
    </StyledAddUserBackdrop>
  );
};

export default EditingUserModal;
