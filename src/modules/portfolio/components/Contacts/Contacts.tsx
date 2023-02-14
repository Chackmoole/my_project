import React from 'react';

import Button from 'modules/portfolio/components/Button/Button';
import Contact from 'modules/portfolio/components/Contact/Contact';
import {
  StyledBox,
  StyledContacts,
  StyledContactsText,
  Styledwrapper,
} from 'modules/portfolio/components/Contacts/Contacts.styled';
import Layout from 'modules/portfolio/components/Layout/Layout';
import Text from 'modules/portfolio/components/Typography/Text';

import { CONTACTS } from 'src/constants';

const Contacts = () => {
  return (
    <Layout>
      <StyledContacts>
        <Styledwrapper>
          <Text variant="h2">Контакты</Text>
          <StyledBox>
            {CONTACTS.map((contact) => {
              return (
                <Contact
                  name={contact.name}
                  value={contact.value}
                  key={contact.name}
                  url={contact.url}
                />
              );
            })}
          </StyledBox>
          <Button>Написать мне</Button>
        </Styledwrapper>
        <StyledContactsText>(c) Ильин Евгений 2023</StyledContactsText>
      </StyledContacts>
    </Layout>
  );
};

export default Contacts;
