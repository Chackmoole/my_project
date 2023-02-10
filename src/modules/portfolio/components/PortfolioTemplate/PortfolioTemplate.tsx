import React from 'react';

import IconArrow from 'modules/portfolio/components/IconArrow/IconArrow';
import {
  StyledBox,
  StyledPortfolioTemplate,
} from 'modules/portfolio/components/PortfolioTemplate/PortfolioTemplate.styled';
import Text from 'modules/portfolio/components/Typography/Text';

import mock from 'src/img/mock.png';

const PortfolioTemplate = () => {
  return (
    <StyledPortfolioTemplate>
      <img src={mock} alt="моковая картинка" />
      <StyledBox>
        <Text variant="h3">Device</Text>
        <Text variant="caption">Год: 2022</Text>
        <IconArrow />
      </StyledBox>
    </StyledPortfolioTemplate>
  );
};

export default PortfolioTemplate;
