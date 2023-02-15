import React from 'react';

import Button from 'modules/portfolio/components/Button/Button';
import Contact from 'modules/portfolio/components/Contact/Contact';
import ContactButton from 'modules/portfolio/components/ContactButton/ContactButton';
import {
  StyledBox,
  StyledContacts,
  StyledContactsText,
  Styledwrapper,
} from 'modules/portfolio/components/Contacts/Contacts.styled';
import Layout from 'modules/portfolio/components/Layout/Layout';
import Text from 'modules/portfolio/components/Text/Text';

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
          <ContactButton />
        </Styledwrapper>
        <StyledContactsText>(c) Ильин Евгений 2023</StyledContactsText>
      </StyledContacts>
    </Layout>
  );
};

export default Contacts;
