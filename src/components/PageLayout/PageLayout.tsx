import React from 'react';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { StyledPageLayout } from 'components/PageLayout/PageLayout.styled';

interface IProps {
  children?: React.ReactNode;
}

const PageLayout = ({ children }: IProps) => {
  return (
    <StyledPageLayout>
      <Header />
      {children}
      <Footer />
    </StyledPageLayout>
  );
};

export default PageLayout;
