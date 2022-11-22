import React from 'react';

import { IUSerFormValue } from 'src/types';

import TextField from 'ui/TextField/TextField';
import { StyledUserForm } from 'ui/UserForm/UserForm.styled';

interface IUserForm {
  formValues: IUSerFormValue;
  setFormValues: (formValues: IUSerFormValue) => void;
}

const UserForm = ({ formValues, setFormValues }: IUserForm) => {
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
