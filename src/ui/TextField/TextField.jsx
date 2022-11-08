import React from 'react';
import MuiTextField from '@mui/material/TextField';

const TextField = ({
  variant = 'outlined',
  size = 'small',
  fullWidth = 'true',
  margin = 'margin',
  ...props
}) => {
  // value, label, onChange & sx идут через ...props
  return (
    <MuiTextField variant={variant} size={size} fullWidth={fullWidth} margin={margin} {...props} />
  );
};

export default TextField;
