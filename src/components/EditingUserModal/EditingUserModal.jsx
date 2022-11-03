import React, { useState } from 'react';
import Modal from 'src/ui/Modal/Modal';
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
    <Modal
      closeModal={closeModal}
      title="Редактирование пользователя"
      onClickAction={printEditionalUser}
    >
      <UserForm formValues={editingFormValues} setFormValues={setEditingFormValues}></UserForm>
    </Modal>
  );
};

export default EditingUserModal;
