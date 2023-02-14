import React from 'react';

import { StyledContact } from 'modules/portfolio/components/Contact/Contact.styled';
import Text from 'modules/portfolio/components/Text/Text';

interface IProps {
  name: string;
  value: string;
  url: string;
}

const Contact = ({ name, value, url }: IProps) => {
  return (
    <StyledContact href={url}>
      <Text variant="h5" as="p">
        {name}
      </Text>
      <Text variant="p" as="p">
        {value}
      </Text>
    </StyledContact>
  );
};

export default Contact;
