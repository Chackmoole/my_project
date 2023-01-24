import React from 'react';

import Layout from 'modules/portfolio/components/Layout/Layout';
import {
  StyledButton,
  StyledContactBox,
  StyledInner,
  StyledPhoto,
  StyledQrCode,
  StyledSubtitle,
  StyledTitileBox,
  StyledTitle,
  StyledTitleBlock,
  StyledWrapper,
} from 'modules/portfolio/components/TitleBlock/TitleBlock.styled';

import mainPhotoMobile from 'src/img/mainPhotoMobile.jpg';
import qrCode from 'src/img/qr_telegram.jpg';

const TitleBlock = () => {
  return (
    <StyledTitleBlock>
      <Layout>
        <StyledWrapper>
          <StyledInner>
            <StyledTitileBox>
              <StyledTitle>Ильин Евгений</StyledTitle>
              <StyledQrCode src={qrCode} alt="QR code for telegram" width={91} height={105} />
            </StyledTitileBox>
            <StyledPhoto src={mainPhotoMobile} alt="фото Ильин Евгений" width={186} height={304} />
          </StyledInner>
          <StyledContactBox>
            <StyledSubtitle>UX designer</StyledSubtitle>
            <StyledSubtitle>Frontend developer</StyledSubtitle>
          </StyledContactBox>
          <StyledButton size="large">Написать мне</StyledButton>
        </StyledWrapper>
      </Layout>
    </StyledTitleBlock>
  );
};

export default TitleBlock;
