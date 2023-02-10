import React from 'react';

import Button from 'modules/portfolio/components/Button/Button';
import Layout from 'modules/portfolio/components/Layout/Layout';
import {
  StyledBox,
  StyledPortfolioBlock,
} from 'modules/portfolio/components/PortfolioBlock/PortfolioBlock.styled';
import PortfolioTemplate from 'modules/portfolio/components/PortfolioTemplate/PortfolioTemplate';
import Text from 'modules/portfolio/components/Typography/Text';

import { works } from 'src/constants';

const PortfolioBlock = () => {
  return (
    <Layout>
      <StyledPortfolioBlock>
        <Text variant="h2">Портфолио</Text>
        <StyledBox>
          {works.map((work) => {
            return (
              <PortfolioTemplate
                src={work.src}
                alt={work.alt}
                title={work.title}
                years={work.years}
                key={work.id}
                id={work.id}
              />
            );
          })}
        </StyledBox>
        <Button>Другие проекты</Button>
      </StyledPortfolioBlock>
    </Layout>
  );
};

export default PortfolioBlock;
