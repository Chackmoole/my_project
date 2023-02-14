import React from 'react';

import { StyledButton } from 'modules/portfolio/components/Button/Button.styled';
import IconTelegram from 'modules/portfolio/components/IconTelegram/IconTelegram';

interface IProps {
  children: string;
  onClick: () => void;
  withIcon?: boolean;
}

const Button = ({ children, onClick, withIcon = false }: IProps) => {
  return (
    <StyledButton onClick={onClick}>
      {withIcon === true && <IconTelegram />}
      {children}
    </StyledButton>
  );
};

export default Button;
