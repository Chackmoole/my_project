import React from 'react';

import IconArrow from 'modules/portfolio/components/IconArrow/IconArrow';
import {
  StyledBox,
  StyledInner,
  StyledLink,
  StyledPortfolioTemplate,
} from 'modules/portfolio/components/PortfolioTemplate/PortfolioTemplate.styled';
import Text from 'modules/portfolio/components/Text/Text';

import { IPortfolioWork } from 'src/types';

const PortfolioTemplate = ({ src, alt, title, years, url }: IPortfolioWork) => {
  return (
    <StyledPortfolioTemplate>
      <img src={src} alt={alt} width="343" height="197" />
      <StyledLink href={url}>
        <StyledBox>
          <StyledInner>
            <Text variant="h3">{title}</Text>
            <Text as="span" variant="caption">
              {years}
            </Text>
          </StyledInner>
          <IconArrow />
        </StyledBox>
      </StyledLink>
    </StyledPortfolioTemplate>
  );
};

export default PortfolioTemplate;
