import React from 'react';

import MuiButton from '@mui/material/Button';

import { IButtonPops } from 'ui/Button/types';

const Button = ({ children, variant = 'contained', size = 'small', ...props }: IButtonPops) => {
  return (
    <MuiButton variant={variant} size={size} {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;
