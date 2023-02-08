import React from 'react';

import { StyledText } from 'modules/portfolio/components/Typography/Text.styled';

interface IProps {
  variant: string;
  children: string;
  as: React.ElementType;
}

const Text = ({ children, as, variant }: IProps) => {
  return (
    <StyledText as={as} variant={variant}>
      {children}
    </StyledText>
  );
};

export default Text;
