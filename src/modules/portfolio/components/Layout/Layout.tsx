import React from 'react';

import { StyledLayout } from 'modules/portfolio/components/Layout/Layout.styled';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
