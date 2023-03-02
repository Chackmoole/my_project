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
  const COUNT_MIN_VISIBLE_WORKS = 3;
  const calcVisibleWorks = React.useCallback(() => {
    return window.innerWidth < 1280 ? COUNT_MIN_VISIBLE_WORKS : COUNT_MIN_VISIBLE_WORKS + 1;
  }, []);
  const visibleWorks = useMemo(() => {
    return WORKS.slice(0, calcVisibleWorks());
  }, [calcVisibleWorks]);
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
