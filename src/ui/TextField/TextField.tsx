import React from 'react';

import MuiTextField, { TextFieldProps } from '@mui/material/TextField';

const TextField = ({
  variant = 'outlined',
  size = 'small',
  fullWidth = true,
  ...props
}: TextFieldProps) => {
  // value, label, onChange & sx идут через ...props
  return <MuiTextField variant={variant} size={size} fullWidth={fullWidth} {...props} />;
};

export default TextField;
