import React from 'react';

import {
  StyledHeader,
  StyledHeaderInner,
  StyledHeaderNav,
  StyledLogoText,
  StyledNavLink,
} from 'src/modules/portfolio/components/Header/Header.styled';
import Logo from 'src/modules/portfolio/components/Logo/Logo';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <Logo />
        <StyledLogoText>Ильин</StyledLogoText>
      </StyledHeaderInner>
      <StyledHeaderNav>
        <StyledNavLink to="/">Обо мне</StyledNavLink>
        <StyledNavLink to="/">Портфолио</StyledNavLink>
        <StyledNavLink to="/">Навыки</StyledNavLink>
      </StyledHeaderNav>
    </StyledHeader>
  );
};

export default Header;
