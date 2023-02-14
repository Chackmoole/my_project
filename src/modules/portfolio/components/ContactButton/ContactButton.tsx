import React from 'react';

import { StyledContactButton } from 'modules/portfolio/components/ContactButton/ContactButton.styled';
import IconTelegram from 'modules/portfolio/components/IconTelegram/IconTelegram';

interface IProps {
  children: string;
}
const ContactButton = ({ children }: IProps) => {
  return (
    <StyledContactButton href="https://t.me/chackmool21">
      <IconTelegram />
      {children}
    </StyledContactButton>
  );
};

export default ContactButton;
