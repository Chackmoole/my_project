import React, { useState } from 'react';
import Dialog from 'src/ui/Modal/Dialog';
import UserForm from 'src/ui/UserForm/UserForm';

const EditingUserModal = ({ isModalOpen, closeModal, currentUser }) => {
  const [editingFormValues, setEditingFormValues] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    status: currentUser.status,
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
    <Dialog
      closeModal={closeModal}
      title="Редактирование пользователя"
      onClickAction={printEditionalUser}
      open={isModalOpen}
    >
      <UserForm formValues={editingFormValues} setFormValues={setEditingFormValues} />
    </Dialog>
  );
};

export default EditingUserModal;
