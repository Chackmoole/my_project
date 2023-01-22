import React from 'react';

import mainPhoto from 'src/img/mainPhoto.jpg';
import qrCode from 'src/img/qr_telegram.jpg';
import Header from 'src/modules/portfolio/components/Header/Header';
import {
  StyledButton,
  StyledContactBox,
  StyledImg,
  StyledMainPage,
  StyledStrong,
  StyledTitileBox,
  StyledTitle,
  StyledWrapper,
} from 'src/modules/portfolio/components/MainPage/MainPage.styled';

const MainPage = () => {
  return (
    <StyledMainPage>
      <Header />
      <StyledWrapper>
        <StyledTitileBox>
          <StyledTitle>Ильин Евгений</StyledTitle>
          <img src={qrCode} alt="QR code for telegram" width={91} height={105} />
        </StyledTitileBox>
        <StyledImg src={mainPhoto} alt="фото Ильин Евгений" width={411} height={553} />
        <StyledContactBox>
          <StyledStrong>UX designer</StyledStrong>
          <StyledStrong>Frontend developer</StyledStrong>
          <StyledButton size="large">Написать мне</StyledButton>
        </StyledContactBox>
      </StyledWrapper>
    </StyledMainPage>
  );
};

export default MainPage;
