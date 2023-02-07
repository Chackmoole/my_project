import React from 'react';

import Button from 'modules/portfolio/components/Button/Button';
import Layout from 'modules/portfolio/components/Layout/Layout';
import {
  StyledContactBox,
  StyledInner,
  StyledPhoto,
  StyledQrCode,
  StyledSubtitle,
  StyledText,
  StyledTitileBox,
  StyledTitleBlock,
  StyledWrapper,
} from 'modules/portfolio/components/TitleBlock/TitleBlock.styled';
import TitleH1 from 'modules/portfolio/components/Typography/TitleH1';

import mainPhotoMobile from 'src/img/mainPhotoMobile.jpg';
import qrCode from 'src/img/qr_telegram.jpg';

const TitleBlock = () => {
  return (
    <StyledTitleBlock>
      <Layout>
        <StyledWrapper>
          <StyledInner>
            <StyledTitileBox>
              <TitleH1 size="0px">Ильин Евгений</TitleH1>
              <StyledQrCode src={qrCode} alt="QR code for telegram" width={91} height={105} />
            </StyledTitileBox>
            <StyledPhoto src={mainPhotoMobile} alt="фото Ильин Евгений" width={252} height={370} />
          </StyledInner>
          <StyledContactBox>
            <StyledSubtitle>
              UX designer <br /> Frontend developer
            </StyledSubtitle>
          </StyledContactBox>
          <StyledText>Я — Ильин Евгений, web дизайнер, обучаюсь frontend разработке.</StyledText>
          <Button>Написать мне</Button>
        </StyledWrapper>
      </Layout>
    </StyledTitleBlock>
  );
};
export default TitleBlock;
