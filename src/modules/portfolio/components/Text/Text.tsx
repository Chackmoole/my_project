import React from 'react';

import { StyledText } from 'modules/portfolio/components/Text/Text.styled';

interface IProps {
  variant?: React.ElementType;
  children: string | React.ReactNode;
  as?: React.ElementType;
  className?: string;
}

const Text = ({ children, variant = 'body', as }: IProps) => {
  return (
    <StyledText as={as || variant} variant={variant}>
      {children}
    </StyledText>
  );
};

export default Text;
