import React from 'react';

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MuiIconButton from '@mui/material/IconButton';

import type { IIconButtonProps } from 'ui/IconButton/type';

const iconComponent = {
  delete: <DeleteIcon />,
  check: <CheckIcon />,
  close: <CloseIcon />,
  edit: <EditIcon />,
};

const IconButton = ({ name, color = 'primary', ...props }: IIconButtonProps) => {
  return (
    <MuiIconButton color={color} {...props}>
      {iconComponent[name]}
    </MuiIconButton>
  );
};

export default IconButton;
