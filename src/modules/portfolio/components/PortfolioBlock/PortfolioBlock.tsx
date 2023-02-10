import React, { useCallback, useState } from 'react';

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
  const [visibleWorksCounter, setVisibleWorksCounter] = useState(2);
  const onAddWorkButtonClick = useCallback(() => {
    setVisibleWorksCounter(visibleWorksCounter + 2);
  }, [visibleWorksCounter]);

  const visibleWorks = works.filter((work) => work.id <= visibleWorksCounter);

  return (
    <Layout>
      <StyledPortfolioBlock>
        <Text variant="h2">Портфолио</Text>
        <StyledBox>
          {visibleWorks.map((work) => {
            return (
              <PortfolioTemplate
                src={work.src}
                alt={work.alt}
                title={work.title}
                years={work.years}
                key={work.id}
                id={work.id}
                url={work.url}
              />
            );
          })}
        </StyledBox>
        <Button onClick={onAddWorkButtonClick}>Другие проекты</Button>
      </StyledPortfolioBlock>
    </Layout>
  );
};

export default PortfolioBlock;
