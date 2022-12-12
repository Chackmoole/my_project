import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from 'src/img/logo.png';

import { StyledHeader, StyledNav } from 'components/Header/Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="react logo" width={40} height={40} />

      <StyledNav>
        <NavLink to="/">Главная страница</NavLink>
        <NavLink to="/users">Страница пользователей</NavLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
