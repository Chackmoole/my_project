import React from 'react';
import { StyledAddUserForm } from 'components/AddUserForm/AddUserForm.styled';
import TextField from 'src/ui/TextField/TextField';

const AddUserForm = ({ formValues, setFormValues }) => {
  return (
    <StyledAddUserForm>
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
    </StyledAddUserForm>
  );
};

export default AddUserForm;
