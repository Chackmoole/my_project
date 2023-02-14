import React from 'react';

import { StyledContact } from 'modules/portfolio/components/Contact/Contact.styled';
import Text from 'modules/portfolio/components/Typography/Text';

interface IProps {
  name: string;
  value: string;
  url: string;
}

const Contact = ({ name, value, url }: IProps) => {
  return (
    <StyledContact href={url}>
      <Text variant="h5">{name}</Text>
      <Text>{value}</Text>
    </StyledContact>
  );
};

export default Contact;
