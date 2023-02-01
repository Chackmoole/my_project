import React from 'react';

import {
  StyledHeader,
  StyledHeaderNav,
  StyledLink,
  StyledLogoLink,
} from 'modules/portfolio/components/Header/Header.styled';
import LogoWithText from 'modules/portfolio/components/LogoWithText/LogoWithText';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoLink href="#">
        <LogoWithText size="36" />
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
