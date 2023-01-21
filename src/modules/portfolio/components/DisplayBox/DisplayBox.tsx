import React from 'react';

import { StyledDisplayBox } from 'src/modules/portfolio/components/DisplayBox/DisplayBox.styled';

interface IProps {
  children: React.ReactNode;
}

const DisplayBox = ({ children }: IProps) => {
  return <StyledDisplayBox>{children}</StyledDisplayBox>;
};

export default DisplayBox;
