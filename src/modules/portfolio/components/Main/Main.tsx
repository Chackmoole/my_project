import React from 'react';

import About from 'modules/portfolio/components/About/About';
import { StyledMain } from 'modules/portfolio/components/Main/Main.styled';
import PortfolioBlock from 'modules/portfolio/components/PortfolioBlock/PortfolioBlock';
import Skills from 'modules/portfolio/components/Skills/Skills';
import TitleBlock from 'modules/portfolio/components/TitleBlock/TitleBlock';

const Main = () => {
  return (
    <StyledMain>
      <TitleBlock />
      <PortfolioBlock />
      <About />
      <Skills />
    </StyledMain>
  );
};

export default Main;
