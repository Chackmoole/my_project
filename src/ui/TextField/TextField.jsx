import React from 'react';
import MuiTextField from '@mui/material/TextField';

const TextField = ({ value, label, onChange }) => {
  return (
    <MuiTextField
      value={value}
      onChange={onChange}
      label={label}
      sx={{ mb: '16px', minWidth: '400px' }}
    />
  );
};

export default TextField;
