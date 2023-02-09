import React from 'react';

import { StyledMain } from 'modules/portfolio/components/Main/Main.styled';
import PortfolioBlock from 'modules/portfolio/components/PortfolioBlock/PortfolioBlock';
import TitleBlock from 'modules/portfolio/components/TitleBlock/TitleBlock';

const Main = () => {
  return (
    <StyledMain>
      <TitleBlock />
      <PortfolioBlock />
    </StyledMain>
  );
};

export default Main;
