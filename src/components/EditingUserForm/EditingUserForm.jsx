import React from 'react';
import TextField from 'src/ui/TextField/TextField';
import { StyledEditingUserForm } from 'components/EditingUserForm/EditingUserForm.styled';
import EditingUserSelect from 'components/EditingUserSelect/EditingUserSelect';

const EditingUserForm = ({ editingFormValues, setEditingFormValues }) => {
  return (
    <StyledEditingUserForm>
      <TextField
        label="Имя"
        value={editingFormValues.firstName}
        onChange={(e) => {
          setEditingFormValues({
            ...editingFormValues,
            firstName: e.target.value,
          });
        }}
      />

      <TextField
        label="Фамилия"
        value={editingFormValues.lastName}
        onChange={(e) => {
          setEditingFormValues({
            ...editingFormValues,
            lastName: e.target.value,
          });
        }}
      />

      <TextField
        label="Почта"
        value={editingFormValues.mail}
        onChange={(e) => {
          setEditingFormValues({
            ...editingFormValues,
            mail: e.target.value,
          });
        }}
      />

      <EditingUserSelect
        editingFormValues={editingFormValues}
        setEditingFormValues={setEditingFormValues}
      />
    </StyledEditingUserForm>
  );
};

export default EditingUserForm;
