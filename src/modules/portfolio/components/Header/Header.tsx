import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

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
        <StyledLink smooth to="#portfolio">
          Портфолио
        </StyledLink>
        <StyledLink smooth to="#about">
          Обо мне
        </StyledLink>
        <StyledLink smooth to="#skills">
          Навыки
        </StyledLink>
        <StyledLink smooth to="#contacts">
          Контакты
        </StyledLink>
      </StyledHeaderNav>
    </StyledHeader>
  );
};

export default Header;
