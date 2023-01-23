import React from 'react';

import {
  StyledHeader,
  StyledHeaderInner,
  StyledHeaderNav,
  StyledLink,
} from 'src/modules/portfolio/components/Header/Header.styled';
import Logo from 'src/modules/portfolio/components/Logo/Logo';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <Logo />
      </StyledHeaderInner>
      <StyledHeaderNav>
        <StyledLink href="#">Обо мне</StyledLink>
        <StyledLink href="#">Портфолио</StyledLink>
        <StyledLink href="#">Навыки</StyledLink>
      </StyledHeaderNav>
    </StyledHeader>
  );
};

export default Header;
