import React from 'react';

import { StyledText } from 'modules/portfolio/components/Typography/Text.styled';

interface IProps {
  variant?: React.ElementType;
  children: string | React.ReactNode;
  as?: React.ElementType;
}

const Text = ({ children, variant = 'p', as }: IProps) => {
  return (
    <StyledText as={as || variant} variant={variant}>
      {children}
    </StyledText>
  );
};

export default Text;
