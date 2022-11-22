import React, { useState } from 'react';

import { IUser } from 'src/types';

import Modal from 'ui/Modal/Modal';
import UserForm from 'ui/UserForm/UserForm';

interface IProps {
  isModalOpen: boolean;
  onClose: () => void;
  currentUser: IUser;
}

const EditingUserModal = ({ isModalOpen, onClose, currentUser }: IProps) => {
  const [editingFormValues, setEditingFormValues] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
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
