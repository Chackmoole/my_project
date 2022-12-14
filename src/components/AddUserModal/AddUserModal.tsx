import React, { useCallback, useState } from 'react';

import UserForm from 'components/UserForm/UserForm';

import Modal from 'ui/Modal/Modal';

interface IProps {
  isModalOpen: boolean;
  onClose: () => void;
}

const AddUserModal = ({ isModalOpen, onClose }: IProps) => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    mail: '',
  });

  const printFormData = useCallback(() => {
    console.log(formValues);
    onClose();
  }, [formValues]);

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
