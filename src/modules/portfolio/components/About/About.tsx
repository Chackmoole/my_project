import React from 'react';

import {
  StyledAbout,
  StyledList,
  StyledListBox,
  StyledTextBox,
  StyledWrapper,
} from 'modules/portfolio/components/About/About.styled';
import Layout from 'modules/portfolio/components/Layout/Layout';
import Text from 'modules/portfolio/components/Text/Text';

const About = () => {
  return (
    <StyledAbout>
      <Layout>
        <StyledWrapper>
          <Text variant="h2">Обо мне</Text>
          <StyledTextBox>
            <Text as="p" variant="body">
              Привет! Я&nbsp;Евгений Ильин и&nbsp;я&nbsp;&mdash; начинающий frontend разработчик.
              Отработав 10&nbsp;лет системным администратором без серьезных перспектив,
              я&nbsp;захотел поменять сферу деятельности. Выбор мой упал на&nbsp;изучение UX/UI,
              учился в&nbsp;Skillbox. В&nbsp;процессе обучения меня больше заинтересовала сфера
              разработки, сейчас я&nbsp;в&nbsp;стадии активного изучения новой для меня сферы :)
            </Text>
            <StyledListBox>
              <Text as="p" variant="body">
                На данный момент:
              </Text>
              <StyledList>
                <li>
                  <Text as="p" variant="body">
                    знаю основы UX/UI, отлично работаю в Figma
                  </Text>
                </li>
                <li>
                  <Text as="p" variant="body">
                    умею верстать, в том числе адаптивно (mobile-first), используя БЭМ и
                    препроцессоры
                  </Text>
                </li>
                <li>
                  <Text as="p" variant="body">
                    изучаю react (под руководством опытного наставника)
                  </Text>
                </li>
              </StyledList>
            </StyledListBox>
          </StyledTextBox>
        </StyledWrapper>
      </Layout>
    </StyledAbout>
  );
};

export default About;
