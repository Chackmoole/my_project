import React from 'react';

import {
  StyledHeader,
  StyledHeaderNav,
  StyledLink,
  StyledLogoLink,
} from 'modules/portfolio/components/Header/Header.styled';
import Logo from 'modules/portfolio/components/Logo/Logo';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoLink href="#">
        <Logo size="36" />
      </StyledLogoLink>
      <StyledHeaderNav>
        <StyledLink href="#">Обо мне</StyledLink>
        <StyledLink href="#">Портфолио</StyledLink>
        <StyledLink href="#">Навыки</StyledLink>
      </StyledHeaderNav>
    </StyledHeader>
  );
};

export default Header;
