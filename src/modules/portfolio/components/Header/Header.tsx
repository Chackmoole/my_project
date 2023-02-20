import React from 'react';

import {
  StyledHeader,
  StyledHeaderNav,
  StyledLink,
} from 'modules/portfolio/components/Header/Header.styled';
import Logo from 'modules/portfolio/components/Logo/Logo';

const Header = () => {
  return (
    <StyledHeader>
      <a href="#">
        <Logo size="36" />
      </a>
      <StyledHeaderNav>
        <StyledLink href="#">Обо мне</StyledLink>
        <StyledLink href="#">Портфолио</StyledLink>
        <StyledLink href="#">Навыки</StyledLink>
      </StyledHeaderNav>
    </StyledHeader>
  );
};

export default Header;
