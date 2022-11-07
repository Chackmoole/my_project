import React, { useState } from 'react';
import Modal from 'src/ui/Modal/Modal';
import UserForm from 'src/ui/UserForm/UserForm';

const AddUserModal = ({ isModalOpen, closeModal }) => {
  const [formValues, setFormValues] = useState({
    firstName: 'Имя',
    lastName: 'Фамилия',
    mail: 'почта',
  });

  const printFormData = () => {
    console.log(formValues);
    closeModal();
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <Modal
      title="Добавление пользователя"
      closeModal={closeModal}
      onClickAction={printFormData}
      open={isModalOpen}
    >
      <UserForm formValues={formValues} setFormValues={setFormValues} />
    </Modal>
  );
};

export default AddUserModal;
