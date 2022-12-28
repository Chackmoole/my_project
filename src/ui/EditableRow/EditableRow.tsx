import React, { ReactNode, useCallback, useState } from 'react';

import { StyledEditableRow, StyledEditableRowBox } from 'ui/EditableRow/EditableRow.styled';
import IconButton from 'ui/IconButton/IconButton';
import Typography from 'ui/Typography/Typography';

interface IProps {
  value: string;
  label: string;
  children?: ReactNode;
  onCancel?: () => void;
}

const EditableRow = ({ value, label, children, onCancel }: IProps) => {
  const [isActive, setActive] = useState(false);

  const onEditButtonClick = useCallback(() => {
    setActive(true);
  }, []);

  const onCloseButtonClick = useCallback(() => {
    setActive(false);
    onCancel();
  }, [onCancel]);

  const onCheckButtonClick = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <StyledEditableRow>
      <Typography sx={{ minWidth: '100px' }}>{label}</Typography>
      <StyledEditableRowBox>
        {!isActive ? (
          <>
            <Typography sx={{ minWidth: '214px', padding: '0 14px' }}>{value}</Typography>
            <IconButton name="edit" onClick={onEditButtonClick} />
          </>
        ) : (
          <>
            {children}
            <IconButton name="check" onClick={onCheckButtonClick} />
            <IconButton name="close" onClick={onCloseButtonClick} />
          </>
        )}
      </StyledEditableRowBox>
    </StyledEditableRow>
  );
};

export default EditableRow;
