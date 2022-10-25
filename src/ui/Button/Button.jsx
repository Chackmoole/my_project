import React from 'react';
import { StyledButton } from 'src/ui/Button/Button.styled';

const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};

export default Button;
