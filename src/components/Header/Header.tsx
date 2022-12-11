import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'src/img/logo.png';

import { StyledHeader, StyledNav } from 'components/Header/Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="react logo" width={40} height={40} />

      <StyledNav>
        <Link to="/">Главная страница</Link>
        <Link to="/users">Страница пользователей</Link>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
