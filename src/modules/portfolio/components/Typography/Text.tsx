import React from 'react';

import { StyledText } from 'modules/portfolio/components/Typography/Text.styled';

interface IProps {
  variant: React.ElementType;
  children: string;
}

const Text = ({ children, variant }: IProps) => {
  return (
    <StyledText as={variant} variant={variant}>
      {children}
    </StyledText>
  );
};

export default Text;
