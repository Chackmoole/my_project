import React from 'react';

import { StyledButton } from 'modules/portfolio/components/Button/Button.styled';

interface IProps {
  children: string;
}

const Button = ({ children }: IProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
