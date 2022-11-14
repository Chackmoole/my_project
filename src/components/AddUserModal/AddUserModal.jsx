import React, { useState } from 'react';

import Modal from 'src/ui/Modal/Modal';
import UserForm from 'src/ui/UserForm/UserForm';

const AddUserModal = ({ isModalOpen, onClose }) => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    mail: '',
  });

  const printFormData = () => {
    console.log(formValues);
    onClose();
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <Modal
      title="Добавление пользователя"
      onClose={onClose}
      onClickAction={printFormData}
      open={isModalOpen}
    >
      <UserForm formValues={formValues} setFormValues={setFormValues} />
    </Modal>
  );
};

export default AddUserModal;
