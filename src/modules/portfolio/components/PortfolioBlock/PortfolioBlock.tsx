import React, { useMemo } from 'react';

import Layout from 'modules/portfolio/components/Layout/Layout';
import LinkButton from 'modules/portfolio/components/LinkButton/LinkButton';
import {
  StyledBox,
  StyledPortfolioBlock,
} from 'modules/portfolio/components/PortfolioBlock/PortfolioBlock.styled';
import PortfolioTemplate from 'modules/portfolio/components/PortfolioTemplate/PortfolioTemplate';
import Text from 'modules/portfolio/components/Text/Text';

import { WORKS } from 'src/constants';

const PortfolioBlock = () => {
  const COUNT_VISIBLE_WORKS = 3;
  const visibleWorks = useMemo(() => {
    return WORKS.slice(0, COUNT_VISIBLE_WORKS);
  }, []);

  return (
    <Layout>
      <StyledPortfolioBlock>
        <Text variant="h2">Портфолио</Text>
        <StyledBox>
          {visibleWorks.map((work) => {
            return <PortfolioTemplate work={work} key={work.title} />;
          })}
        </StyledBox>
        <LinkButton href="#">Другие проекты</LinkButton>
      </StyledPortfolioBlock>
    </Layout>
  );
};

export default PortfolioBlock;
