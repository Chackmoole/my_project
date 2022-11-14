import React, { useState } from 'react';

import Modal from 'src/ui/Modal/Modal';
import UserForm from 'src/ui/UserForm/UserForm';

const EditingUserModal = ({ isModalOpen, onClose, currentUser }) => {
  const [editingFormValues, setEditingFormValues] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    status: currentUser.status,
    mail: currentUser.mail,
  });

  const printEditionalUser = () => {
    console.log(editingFormValues);
    onClose();
  };

  if (!isModalOpen) {
    return null;
  }
  return (
    <Modal
      onClose={onClose}
      title="Редактирование пользователя"
      onClickAction={printEditionalUser}
      open={isModalOpen}
    >
      <UserForm formValues={editingFormValues} setFormValues={setEditingFormValues} />
    </Modal>
  );
};

export default EditingUserModal;
