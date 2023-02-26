import React from 'react';

import IconArrow from 'modules/portfolio/components/IconArrow/IconArrow';
import {
  StyledBox,
  StyledImg,
  StyledInner,
  StyledLink,
  StyledPortfolioTemplate,
} from 'modules/portfolio/components/PortfolioTemplate/PortfolioTemplate.styled';
import Text from 'modules/portfolio/components/Text/Text';

import { IPortfolioWork } from 'src/types';

interface IProps {
  work: IPortfolioWork;
}

const PortfolioTemplate = ({ work }: IProps) => {
  return (
    <StyledPortfolioTemplate>
      <picture>
        <source srcSet={work.src.tablet} media="(min-width: 768px)" />
        <StyledImg
          src={work.src.mobile}
          alt={`изображение сайта ${work.title}`}
          width="200"
          height="115"
        />
      </picture>
      <StyledLink href={work.url}>
        <StyledBox>
          <StyledInner>
            <Text variant="h3">{work.title}</Text>
            <Text as="span" variant="caption">
              {work.date}г.
            </Text>
          </StyledInner>
          <IconArrow />
        </StyledBox>
      </StyledLink>
    </StyledPortfolioTemplate>
  );
};

export default PortfolioTemplate;
