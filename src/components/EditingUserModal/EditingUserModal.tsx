import React, { useState } from 'react';

import { IUser } from 'src/types';
import Modal from 'src/ui/Modal/Modal';
import UserForm from 'src/ui/UserForm/UserForm';

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
