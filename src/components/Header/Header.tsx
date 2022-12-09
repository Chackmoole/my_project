import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import logo from 'src/img/logo.png';

import { StyledHeader } from 'components/Header/Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="react logo" width={40} height={40} />
      <Typography variant="subtitle1">Страница пользователей</Typography>
      <Link to="/">Главная страница</Link>
      <Link to="/users">Страница пользователей</Link>
    </StyledHeader>
  );
};

export default Header;
