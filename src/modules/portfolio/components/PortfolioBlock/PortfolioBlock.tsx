import React from 'react';

import Layout from 'modules/portfolio/components/Layout/Layout';
import { StyledPortfolioBlock } from 'modules/portfolio/components/PortfolioBlock/PortfolioBlock.styled';
import Text from 'modules/portfolio/components/Typography/Text';

const PortfolioBlock = () => {
  return (
    <StyledPortfolioBlock>
      <Layout>
        <Text variant="h2">Портфолио</Text>
      </Layout>
    </StyledPortfolioBlock>
  );
};

export default PortfolioBlock;
