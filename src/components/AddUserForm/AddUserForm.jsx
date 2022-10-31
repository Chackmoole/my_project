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
        value={formValues.secondName}
        onChange={(e) => {
          setFormValues({
            ...formValues,
            secondName: e.target.value,
          });
        }}
      />

      <TextField
        label="Почта"
        value={formValues.email}
        onChange={(e) => {
          setFormValues({
            ...formValues,
            email: e.target.value,
          });
        }}
      />
    </StyledAddUserForm>
  );
};

export default AddUserForm;
