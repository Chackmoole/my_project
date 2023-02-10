import React from 'react';

import { StyledButton } from 'modules/portfolio/components/Button/Button.styled';

interface IProps {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: IProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
