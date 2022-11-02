import React from 'react';
import { StyledInput, StyledLabel } from 'src/ui/TextField/TextField.styled';

const TextField = ({ value, label, onChange }) => {
  return (
    <StyledLabel>
      {label}
      <StyledInput value={value} onChange={onChange} />
    </StyledLabel>
  );
};

export default TextField;
