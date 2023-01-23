import React from 'react';

import {
  StyledButton,
  StyledContactBox,
  StyledInner,
  StyledPhoto,
  StyledQrCode,
  StyledStrong,
  StyledTitileBox,
  StyledTitle,
  StyledTitleBlock,
  StyledWrapper,
} from 'modules/portfolio/components/TitleBlock/TitleBlock.styled';

import mainPhotoMobile from 'src/img/mainPhotoMobile.jpg';
import qrCode from 'src/img/qr_telegram.jpg';

// тут нужен  центровщик для каждого вложенного блока страницы, я так понимаю StyledWrapper - это центровщик, а StyledTitleBlock тянется на весь экран
// он должен включать в себя и хэдер по логике
const TitleBlock = () => {
  return (
    <StyledTitleBlock>
      {/* тут тег хэдер 1) див - враппер имя + картинка 2) див - блок с профами 3) кнопка*/}
      <StyledWrapper>
        <StyledInner>
          <StyledTitileBox>
            <StyledTitle>Ильин Евгений</StyledTitle>
            <StyledQrCode src={qrCode} alt="QR code for telegram" width={91} height={105} />
          </StyledTitileBox>
          <StyledPhoto src={mainPhotoMobile} alt="фото Ильин Евгений" width={186} height={304} />
        </StyledInner>
        <StyledContactBox>
          <StyledStrong>UX designer</StyledStrong>
          <StyledStrong>Frontend developer</StyledStrong>
        </StyledContactBox>
        <StyledButton size="large">Написать мне</StyledButton>
      </StyledWrapper>
    </StyledTitleBlock>
  );
};

export default TitleBlock;
