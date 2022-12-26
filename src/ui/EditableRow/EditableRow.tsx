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

  const onEditButtonClick = useCallback(() => {
    setInputVisible(true);
  }, []);

  const onCloseButtonClick = useCallback(() => {
    setInputVisible(false);
  }, []);

  const onCheckButtonClick = useCallback(() => {
    setInputVisible(false);
    console.log(value);
  }, [value]);

  return (
    <StyledEditableRow>
      <Typography sx={{ minWidth: '100px' }}>{label}</Typography>
      {!isInputVisible ? (
        <>
          <Typography sx={{ minWidth: '100px' }}>{label}</Typography>
          <IconButton name="edit" onClick={onEditButtonClick} />
        </>
      ) : (
        <>
          <TextField label={label} value={value} onChange={onChange} />
          <IconButton name="check" onClick={onCheckButtonClick} />
          <IconButton name="close" onClick={onCloseButtonClick} />
        </>
      )}
    </StyledEditableRow>
  );
};

export default EditableRow;
