import React, { useCallback, useMemo, useState } from 'react';

import Button from 'modules/portfolio/components/Button/Button';
import Layout from 'modules/portfolio/components/Layout/Layout';
import {
  StyledBox,
  StyledPortfolioBlock,
} from 'modules/portfolio/components/PortfolioBlock/PortfolioBlock.styled';
import PortfolioTemplate from 'modules/portfolio/components/PortfolioTemplate/PortfolioTemplate';
import Text from 'modules/portfolio/components/Text/Text';

import { WORKS } from 'src/constants';

const PortfolioBlock = () => {
  const COUNT_MINIMUM_WORKS = 2;
  const COUNT_ADDED_WORKS = 2;

  const [visibleWorksCounter, setVisibleWorksCounter] = useState(COUNT_MINIMUM_WORKS);
  const onAddWorkButtonClick = useCallback(() => {
    setVisibleWorksCounter(visibleWorksCounter + COUNT_ADDED_WORKS);
  }, [visibleWorksCounter]);

  const visibleWorks = useMemo(() => {
    return WORKS.slice(0, visibleWorksCounter);
  }, [visibleWorksCounter]);

  return (
    <Layout>
      <StyledPortfolioBlock>
        <Text variant="h2">Портфолио</Text>
        <StyledBox>
          {visibleWorks.map((work) => {
            return <PortfolioTemplate work={work} key={work.title} />;
          })}
        </StyledBox>
        <Button onClick={onAddWorkButtonClick}>Другие проекты</Button>
      </StyledPortfolioBlock>
    </Layout>
  );
};

export default PortfolioBlock;
