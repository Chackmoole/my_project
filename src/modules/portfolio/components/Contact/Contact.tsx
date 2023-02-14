import React from 'react';

import { StyledContact } from 'modules/portfolio/components/Contact/Contact.styled';
import Text from 'modules/portfolio/components/Typography/Text';

interface IProps {
  name: string;
  value: string;
}

const Contact = ({ name, value }: IProps) => {
  return (
    <StyledContact>
      <Text variant="h5">{name}</Text>
      <Text>{value}</Text>
    </StyledContact>
  );
};

export default Contact;
