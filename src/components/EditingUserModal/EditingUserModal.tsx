import React, { useCallback, useState } from 'react';

import { IUser } from 'src/types';

import UserForm from 'components/UserForm/UserForm';

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
    mail: currentUser.mail,
  });

  const printEditionalUser = useCallback(() => {
    console.log(editingFormValues);
    onClose();
  }, [editingFormValues]);

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
