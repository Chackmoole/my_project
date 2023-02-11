import React from 'react';

import {
  StyledAbout,
  StyledList,
  StyledListBox,
  StyledTextBox,
} from 'modules/portfolio/components/About/About.styled';
import Layout from 'modules/portfolio/components/Layout/Layout';
import Text from 'modules/portfolio/components/Typography/Text';

const About = () => {
  return (
    <Layout>
      <StyledAbout>
        <Text variant="h2">Обо мне</Text>
        <StyledTextBox>
          <Text variant="p">
            Привет! Я&nbsp;Евгений Ильин и&nbsp;я&nbsp;&mdash; начинающий frontend разработчик.
            Отработав 10&nbsp;лет системным администратором без серьезных перспектив, я&nbsp;захотел
            поменять сферу деятельности. Выбор мой упал на&nbsp;изучение UX/UI, учился
            в&nbsp;Skillbox. В&nbsp;процессе обучения меня больше заинтересовала сфера разработки,
            сейчас я&nbsp;в&nbsp;стадии активного изучения новой для меня сферы :)
          </Text>
          <StyledListBox>
            <Text>На данный момент:</Text>
            <StyledList>
              <li>знаю основы UX/UI, отлично работаю в Figma</li>
              <li>умею верстать, в том числе адаптивно (mobile-first)</li>
              <li>
                используя БЭМ и препроцессоры изучаю react (под руководством опытного наставника)
              </li>
            </StyledList>
          </StyledListBox>
        </StyledTextBox>
      </StyledAbout>
    </Layout>
  );
};

export default About;
