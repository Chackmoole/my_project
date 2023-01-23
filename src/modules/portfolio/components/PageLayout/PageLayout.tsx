import React from 'react';

import { StyledPageLayout } from 'modules/portfolio/components/PageLayout/PageLayout.styled';

interface IProps {
  children: React.ReactNode;
}
const PageLayout = ({ children }: IProps) => {
  return <StyledPageLayout>{children}</StyledPageLayout>;
};

export default PageLayout;
