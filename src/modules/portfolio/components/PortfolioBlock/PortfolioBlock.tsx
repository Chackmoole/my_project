import React, { useMemo } from 'react';

import Layout from 'modules/portfolio/components/Layout/Layout';
import LinkButton from 'modules/portfolio/components/LinkButton/LinkButton';
import {
  StyledBox,
  StyledPortfolioBlock,
  StyledWrapper,
} from 'modules/portfolio/components/PortfolioBlock/PortfolioBlock.styled';
import PortfolioTemplate from 'modules/portfolio/components/PortfolioTemplate/PortfolioTemplate';
import Text from 'modules/portfolio/components/Text/Text';

import { WORKS } from 'src/constants';

const PortfolioBlock = () => {
  const COUNT_MOBILE = 3;
  const COUNT_DESKTOP = 4;
  const visibleWorksCount = window.innerWidth < 1280 ? COUNT_MOBILE : COUNT_DESKTOP;

  const visibleWorks = useMemo(() => {
    return WORKS.slice(0, visibleWorksCount);
  }, [visibleWorksCount]);
  return (
    <StyledPortfolioBlock id="portfolio">
      <Layout>
        <StyledWrapper>
          <Text variant="h2">Портфолио</Text>
          <StyledBox>
            {visibleWorks.map((work) => {
              return <PortfolioTemplate work={work} key={work.title} />;
            })}
          </StyledBox>
          <LinkButton href="#">Другие проекты</LinkButton>
        </StyledWrapper>
      </Layout>
    </StyledPortfolioBlock>
  );
};

export default PortfolioBlock;
