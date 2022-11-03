import React, { useState } from 'react';
import AddUserForm from 'src/components/AddUserForm/AddUserForm';
import Modal from 'src/ui/Modal/Modal';

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
    <Modal title="Добавление пользователя" closeModal={closeModal} onClickAction={printFormData}>
      <AddUserForm formValues={formValues} setFormValues={setFormValues} />
    </Modal>
  );
};

export default AddUserModal;
