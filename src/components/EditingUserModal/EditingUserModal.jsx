import React, { useState } from 'react';
import EditingUserForm from 'components/EditingUserForm/EditingUserForm';
import Modal from 'src/ui/Modal/Modal';

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
      <EditingUserForm
        editingFormValues={editingFormValues}
        setEditingFormValues={setEditingFormValues}
      />
    </Modal>
  );
};

export default EditingUserModal;
