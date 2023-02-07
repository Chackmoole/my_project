import React from 'react';

import { StyledTypography } from 'modules/portfolio/components/Typography/TitleH1.styled';

interface IProps {
  children: string | React.ReactNode;
  size: string;
}

const TitleH1 = ({ children, size = '16px' }: IProps) => {
  return (
    <>
      <StyledTypography size={size}>{children}</StyledTypography>
    </>
  );
};

export default TitleH1;
