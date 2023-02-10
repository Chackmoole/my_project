import React from 'react';

import IconArrow from 'modules/portfolio/components/IconArrow/IconArrow';
import {
  StyledBox,
  StyledInner,
  StyledPortfolioTemplate,
} from 'modules/portfolio/components/PortfolioTemplate/PortfolioTemplate.styled';
import Text from 'modules/portfolio/components/Typography/Text';

interface IProps {
  id: number;
  src: string;
  alt: string;
  title: string;
  years: string;
}

const PortfolioTemplate = ({ src, alt, title, years }: IProps) => {
  return (
    <StyledPortfolioTemplate>
      <img src={src} alt={alt} />
      <StyledBox>
        <StyledInner>
          <Text variant="h3">{title}</Text>
          <Text as="span" variant="caption">
            {years}
          </Text>
        </StyledInner>
        <IconArrow />
      </StyledBox>
    </StyledPortfolioTemplate>
  );
};

export default PortfolioTemplate;
