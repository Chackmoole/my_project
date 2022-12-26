import React, { ChangeEvent, ReactNode, useCallback, useState } from 'react';

import { Box } from 'ui/Box/Box';
import { StyledEditableRow } from 'ui/EditableRow/EditableRow.styled';
import IconButton from 'ui/IconButton/IconButton';
import Typography from 'ui/Typography/Typography';

interface IProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  currentUserValues: object;
  children?: ReactNode;
}

const EditableRow = ({ currentUserValues, onChange, value, label, children }: IProps) => {
  const [isActive, setActive] = useState(false);

  const onEditButtonClick = useCallback(() => {
    setActive(true);
  }, []);

  const onCloseButtonClick = useCallback(() => {
    setActive(false);
  }, []);

  const onCheckButtonClick = useCallback(() => {
    setActive(false);
    console.log(currentUserValues);
  }, [currentUserValues]);

  return (
    <StyledEditableRow>
      <Typography sx={{ minWidth: '100px' }}>{label}</Typography>
      {!isActive ? (
        <Box sx={{ display: 'flex', alignItems: 'center', minWidth: '100px' }}>
          <Typography sx={{ minWidth: '100px' }}>{value}</Typography>
          <IconButton name="edit" onClick={onEditButtonClick} />
        </Box>
      ) : (
        <>
          {children}
          <IconButton name="check" onClick={onCheckButtonClick} />
          <IconButton name="close" onClick={onCloseButtonClick} />
        </>
      )}
    </StyledEditableRow>
  );
};

export default EditableRow;
