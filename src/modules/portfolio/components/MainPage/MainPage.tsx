import React from 'react';

import DisplayBox from 'src/modules/portfolio/components/DisplayBox/DisplayBox';
import Header from 'src/modules/portfolio/components/Header/Header';
import { StyledMainPage } from 'src/modules/portfolio/components/MainPage/MainPage.styled';

const MainPage = () => {
  return (
    <StyledMainPage>
      <DisplayBox>
        <Header />
      </DisplayBox>
    </StyledMainPage>
  );
};

export default MainPage;
