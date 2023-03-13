import React from 'react';

import Background from 'modules/portfolio/components/Background/Background';
import Contact from 'modules/portfolio/components/Contact/Contact';
import ContactButton from 'modules/portfolio/components/ContactButton/ContactButton';
import {
  StyledBox,
  StyledContacts,
  StyledContactsText,
  StyledInner,
  StyledWrapper,
} from 'modules/portfolio/components/Contacts/Contacts.styled';
import Layout from 'modules/portfolio/components/Layout/Layout';
import Text from 'modules/portfolio/components/Text/Text';

import { CONTACTS } from 'src/constants';

const Contacts = () => {
  return (
    <StyledContacts id="contacts">
      <Background />
      <Layout>
        <StyledWrapper>
          <StyledInner>
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
          </StyledInner>
          <StyledContactsText>(c) Ильин Евгений 2023</StyledContactsText>
        </StyledWrapper>
      </Layout>
    </StyledContacts>
  );
};

export default Contacts;
