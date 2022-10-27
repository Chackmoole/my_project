import React from 'react';
import {
  StyledInput,
  StyledLabel,
  StyledAddUserForm,
} from 'components/AddUserForm/AddUserForm.styled';

const AddUserForm = ({ form, setForm }) => {
  return (
    <StyledAddUserForm>
      <StyledLabel>
        Имя
        <StyledInput
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </StyledLabel>
      <StyledLabel>
        Фамилия
        <StyledInput
          value={form.secondName}
          onChange={(e) => {
            setForm({
              ...form,
              secondName: e.target.value,
            });
          }}
        />
      </StyledLabel>
      <StyledLabel>
        Почта
        <StyledInput
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </StyledLabel>
    </StyledAddUserForm>
  );
};

export default AddUserForm;
