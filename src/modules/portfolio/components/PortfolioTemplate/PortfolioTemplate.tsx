import React from 'react';

import IconArrow from 'modules/portfolio/components/IconArrow/IconArrow';
import {
  StyledBox,
  StyledPortfolioTemplate,
} from 'modules/portfolio/components/PortfolioTemplate/PortfolioTemplate.styled';
import Text from 'modules/portfolio/components/Typography/Text';

import { MOCK_PORTFOLIO } from 'src/constants';

const PortfolioTemplate = () => {
  return (
    <StyledPortfolioTemplate>
      <img src={MOCK_PORTFOLIO[0].src} alt={MOCK_PORTFOLIO[0].alt} />
      <StyledBox>
        <Text variant="h3">{MOCK_PORTFOLIO[0].title}</Text>
        <Text as="span" variant="caption">
          {MOCK_PORTFOLIO[0].years}
        </Text>
        <IconArrow />
      </StyledBox>
    </StyledPortfolioTemplate>
  );
};

export default PortfolioTemplate;
