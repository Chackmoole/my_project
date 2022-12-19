import React, { ChangeEvent } from 'react';

import { StyledEditableRow } from 'ui/EditableRow/EditableRow.styled';
import TextField from 'ui/TextField/TextField';

interface IProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EditableRow = ({ onChange, value }: IProps) => {
  return (
    <StyledEditableRow>
      <TextField label="Имя" value={value} onChange={onChange} />
    </StyledEditableRow>
  );
};

export default EditableRow;
