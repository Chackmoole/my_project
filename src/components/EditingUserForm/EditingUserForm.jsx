import React from 'react';
import { StyledEditingUserForm } from 'components/EditingUserForm/EditingUserForm.styled';
import TextField from 'src/ui/TextField/TextField';

const EditingUserForm = ({ form, setForm }) => {
  return (
    <StyledEditingUserForm>
      <TextField form={form} setForm={setForm} formInput={form.firstName}></TextField>
      <TextField form={form} setForm={setForm} formInput={form.secondName}></TextField>
      <TextField form={form} setForm={setForm} formInput={form.email}></TextField>
    </StyledEditingUserForm>
  );
};

export default EditingUserForm;
