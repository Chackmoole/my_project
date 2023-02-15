import React from 'react';

import { StyledButton } from 'modules/portfolio/components/Button/Button.styled';

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  as?: React.ElementType;
  href?: string;
}

const Button = ({ children, onClick, as, ...props }: IProps) => {
  return (
    <StyledButton onClick={onClick} as={as} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
