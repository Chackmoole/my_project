import React from 'react';
import Button from 'src/ui/Button/Button';

const AddUserButton = ({ openModal }) => {
  console.log('AddUserButton props: ', openModal);
  return <Button onClick={openModal}>Добавить пользователя</Button>;
};

export default AddUserButton;
