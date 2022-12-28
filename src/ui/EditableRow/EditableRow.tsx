import React, { ChangeEvent, ReactNode, useCallback, useState } from 'react';

import { IUserStatus } from 'src/types';

import { Box } from 'ui/Box/Box';
import { StyledEditableRow } from 'ui/EditableRow/EditableRow.styled';
import IconButton from 'ui/IconButton/IconButton';
import Typography from 'ui/Typography/Typography';

interface IProps {
  value: string;
  label: string;
  children?: ReactNode;
}

const EditableRow = ({ value, label, children }: IProps) => {
  const [isActive, setActive] = useState(false);

  const onEditButtonClick = useCallback(() => {
    setActive(true);
  }, []);

  const onCloseButtonClick = useCallback(() => {
    setActive(false);
  }, []);

  const onCheckButtonClick = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <StyledEditableRow>
      <Typography sx={{ minWidth: '100px' }}>{label}</Typography>
      {!isActive ? (
        <Box sx={{ display: 'flex', alignItems: 'center', minWidth: '100px' }}>
          <Typography sx={{ minWidth: '214px', padding: '0 14px' }}>{value}</Typography>
          <IconButton name="edit" onClick={onEditButtonClick} />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', alignItems: 'center', minWidth: '100px' }}>
          {children}
          <IconButton name="check" onClick={onCheckButtonClick} />
          <IconButton name="close" onClick={onCloseButtonClick} />
        </Box>
      )}
    </StyledEditableRow>
  );
};

export default EditableRow;
