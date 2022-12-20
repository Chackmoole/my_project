import React, { ChangeEvent } from 'react';

import { StyledEditableRow } from 'ui/EditableRow/EditableRow.styled';
import TextField from 'ui/TextField/TextField';

interface IProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const EditableRow = ({ onChange, value, label }: IProps) => {
  return (
    <StyledEditableRow>
      <div></div>

      <TextField label={label} value={value} onChange={onChange} />
    </StyledEditableRow>
  );
};

export default EditableRow;
