import React from 'react';
import { StyledHeader, StyledTitle } from 'components/Header/Header.styled';
import logo from 'src/img/logo.png';

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="react logo" width={40} height={40} />
      <StyledTitle>Страница пользователей</StyledTitle>
    </StyledHeader>
  );
};

export default Header;
