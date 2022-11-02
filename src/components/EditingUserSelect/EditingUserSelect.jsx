import React from 'react';
import SelectOption from 'src/ui/SelectOption/SelectOption';
import { statusTitle } from 'src/constants';
import { StyledEditingUserSelect } from 'components/EditingUserSelect/EditingUserSelect.styled';
const options = [
  {
    label: statusTitle['active'],
    value: 'active',
  },
  {
    label: statusTitle['frozen'],
    value: 'frozen',
  },
  {
    label: statusTitle['blocked'],
    value: 'blocked',
  },
];

const EditingUserSelect = ({ editingFormValues, setEditingFormValues }) => {
  // console.log(editingFormValues);

  return (
    <StyledEditingUserSelect
      name="newUserStatus"
      id="newUserStatus"
      onChange={(e) => {
        console.log(e.target);
        setEditingFormValues({
          ...editingFormValues,
          status: e.target.status,
        });
      }}
    >
      {options.map((option) => {
        const isSelect = () => {
          editingFormValues.status === option.value ? 'selected' : null;
        };
        return (
          <SelectOption
            key={option.value}
            optionValue={option.value}
            optionText={option.label}
            selected={isSelect}
          />
        );
      })}
    </StyledEditingUserSelect>
  );
};

export default EditingUserSelect;
