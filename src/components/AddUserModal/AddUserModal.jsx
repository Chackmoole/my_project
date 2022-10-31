import React, { useState } from 'react';
import {
  StyledAddUserBackdrop,
  StyledAddUserModal,
  StyledH3,
  StyledModalActions,
} from 'components/AddUserModal/AddUserModal.styled';
import Button from 'src/ui/Button/Button';
import CrossButton from 'src/ui/CrossButton/CrossButton';
import AddUserForm from 'src/components/AddUserForm/AddUserForm';

const AddUserModal = ({ isModalOpen, closeModal }) => {
  const [formValues, setFormValues] = useState({ firstName: '1', secondName: '2', email: '3' });

  const printFormData = () => {
    console.log(formValues);
    closeModal();
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <>
      <StyledAddUserBackdrop onClick={closeModal}>
        <StyledAddUserModal onClick={(e) => e.stopPropagation()}>
          <CrossButton onClick={closeModal} />
          <StyledH3>Добавление пользователя</StyledH3>
          <AddUserForm formValues={formValues} setFormValues={setFormValues} />
          <StyledModalActions>
            <Button onClick={closeModal} variant="outlined">
              Отменить
            </Button>
            <Button onClick={printFormData}>Сохранить</Button>
          </StyledModalActions>
        </StyledAddUserModal>
      </StyledAddUserBackdrop>
    </>
  );
};

export default AddUserModal;
