import React from 'react';

import Header from 'modules/portfolio/components/Header/Header';
import {
  StyledButton,
  StyledContactBox,
  StyledImg,
  StyledStrong,
  StyledTitileBox,
  StyledTitle,
  StyledTitleBlock,
  StyledWrapper,
} from 'modules/portfolio/components/TitleBlock/TitleBlock.styled';

import mainPhoto from 'src/img/mainPhoto.jpg';
import qrCode from 'src/img/qr_telegram.jpg';

const TitleBlock = () => {
  return (
    <StyledTitleBlock>
      <Header />
      <StyledWrapper>
        <StyledTitileBox>
          <StyledTitle>Ильин Евгений</StyledTitle>
          <img src={qrCode} alt="QR code for telegram" width={91} height={105} />
        </StyledTitileBox>
        <StyledImg src={mainPhoto} alt="фото Ильин Евгений" width={330} height={444} />
        <StyledContactBox>
          <StyledStrong>UX designer</StyledStrong>
          <StyledStrong>Frontend developer</StyledStrong>
          <StyledButton size="large">Написать мне</StyledButton>
        </StyledContactBox>
      </StyledWrapper>
    </StyledTitleBlock>
  );
};

export default TitleBlock;
