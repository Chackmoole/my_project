import React from 'react';

import { StyledTitleH2 } from 'modules/portfolio/components/Typography/TitleH2.styled';

interface IProps {
  children: React.ReactNode;
  size: string;
}

const TitleH2 = ({ children, size = '14px' }: IProps) => {
  return <StyledTitleH2 size={size}>{children}</StyledTitleH2>;
};

export default TitleH2;
