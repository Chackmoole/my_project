import React from 'react';

import MuiButton from '@mui/material/Button';

const Button = ({ children, variant = 'contained', size = 'small', ...props }) => {
  return (
    <MuiButton variant={variant} size={size} {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;
