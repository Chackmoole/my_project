import React from 'react';

import { IUSerFormValues } from 'src/types';

import { StyledUserForm } from 'components/UserForm/UserForm.styled';

import TextField from 'ui/TextField/TextField';

interface IUserForm {
  formValues: IUSerFormValues;
  setFormValues: (formValues: IUSerFormValues) => void;
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
