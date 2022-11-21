import React, { useState } from 'react';

import { IUser } from 'src/types';
import UserForm from 'src/ui/UserForm/UserForm';

import Modal from 'ui/Modal/Modal';

interface IProps {
  isModalOpen: boolean;
  onClose: () => void;
  currentUser: IUser;
}

const EditingUserModal = ({ isModalOpen, onClose, currentUser }: IProps) => {
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
