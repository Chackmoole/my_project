import React from 'react';

import TextField from 'src/ui/TextField/TextField';
import { StyledUserForm } from 'src/ui/UserForm/UserForm.styled';

const UserForm = ({ formValues, setFormValues }) => {
  return (
    <StyledUserForm>
      <TextField
        label="Имя"
        value={formValues.firstName}
        onChange={(e) => {
          setFormValues({
            ...formValues,
            firstName: e.target.value,
          });
        }}
        sx={{ mb: '16px', minWidth: '400px' }}
      />

      <TextField
        label="Фамилия"
        value={formValues.lastName}
        onChange={(e) => {
          setFormValues({
            ...formValues,
            lastName: e.target.value,
          });
        }}
        sx={{ mb: '16px', minWidth: '400px' }}
      />

      <TextField
        label="Почта"
        value={formValues.mail}
        onChange={(e) => {
          setFormValues({
            ...formValues,
            mail: e.target.value,
          });
        }}
        sx={{ mb: '16px', minWidth: '400px' }}
      />
    </StyledUserForm>
  );
};

export default UserForm;
