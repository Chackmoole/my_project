import React from 'react';
import { StyledHeader } from 'components/Header/Header.styled';
import Typography from '@mui/material/Typography';
import logo from 'src/img/logo.png';

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="react logo" width={40} height={40} />
      <Typography variant="subtitle1">Страница пользователей</Typography>
    </StyledHeader>
  );
};

export default Header;
