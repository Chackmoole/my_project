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
  url: string;
}

const PortfolioTemplate = ({ src, alt, title, years, url }: IProps) => {
  return (
    <StyledPortfolioTemplate>
      <img src={src} alt={alt} />
      <a href={url}>
        <StyledBox>
          <StyledInner>
            <Text variant="h3">{title}</Text>
            <Text as="span" variant="caption">
              {years}
            </Text>
          </StyledInner>
          <IconArrow />
        </StyledBox>
      </a>
    </StyledPortfolioTemplate>
  );
};

export default PortfolioTemplate;
