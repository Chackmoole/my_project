import React from 'react';

import About from 'modules/portfolio/components/About/About';
import Contacts from 'modules/portfolio/components/Contacts/Contacts';
import Header from 'modules/portfolio/components/Header/Header';
import PortfolioBlock from 'modules/portfolio/components/PortfolioBlock/PortfolioBlock';
import Skills from 'modules/portfolio/components/Skills/Skills';
import TitleBlock from 'modules/portfolio/components/TitleBlock/TitleBlock';

const Portfolio = () => {
  return (
    <>
      <Header />
      <main>
        <TitleBlock />
        <PortfolioBlock />
        <About />
        <Skills />
        <Contacts />
      </main>
    </>
  );
};

export default Portfolio;
