import React from 'react';

import Typography from '@mui/material/Typography';

// import logo from 'img/logo.png';
import { StyledHeader } from 'components/Header/Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      {/*<img src={logo} alt="react logo" width={40} height={40} />*/}
      <Typography variant="subtitle1">Страница пользователей</Typography>
    </StyledHeader>
  );
};

export default Header;
