import React from 'react';
import { StyledUserForm } from 'src/ui/UserForm/UserForm.styled';
import TextField from 'src/ui/TextField/TextField';

const UserForm = ({ formValues, setFormValues, children }) => {
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
      />
      {children}
    </StyledUserForm>
  );
};

export default UserForm;
