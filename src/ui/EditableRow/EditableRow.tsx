import React, { ChangeEvent, useCallback, useState } from 'react';

import { StyledEditableRow } from 'ui/EditableRow/EditableRow.styled';
import IconButton from 'ui/IconButton/IconButton';
import TextField from 'ui/TextField/TextField';
import Typography from 'ui/Typography/Typography';

interface IProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const EditableRow = ({ onChange, value, label }: IProps) => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [isLabeleVisible, setLabeleVisible] = useState(true);

  const onEditClick = useCallback(() => {
    setInputVisible(true);
    setLabeleVisible(false);
  }, []);

  return (
    <StyledEditableRow>
      <Typography sx={{ minWidth: '100px' }}>{label}</Typography>
      {isLabeleVisible ? <Typography sx={{ minWidth: '100px' }}>{label}</Typography> : null}
      {!isInputVisible ? null : <TextField label={label} value={value} onChange={onChange} />}
      <IconButton name="edit" onClick={onEditClick} />
    </StyledEditableRow>
  );
};

export default EditableRow;
