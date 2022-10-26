import React from 'react';
import { StyledButton } from 'src/ui/Button/Button.styled';

const Button = ({ children, onClick, variant = 'contained' }) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
