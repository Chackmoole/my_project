import React from 'react';
import { StyledCrossButton } from 'src/ui/CrossButton/CrossButton.styled';

const CrossButton = (props) => {
  return <StyledCrossButton onClick={props.onClick} />;
};

export default CrossButton;
