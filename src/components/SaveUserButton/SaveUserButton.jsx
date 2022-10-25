import React from 'react';
import Button from 'src/ui/Button/Button';

const SaveUserButton = ({ closeModal, children }) => {
  return <Button onClick={closeModal}>{children}</Button>;
};

export default SaveUserButton;
