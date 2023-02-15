import React from 'react';

import Button from 'modules/portfolio/components/Button/Button';
import ContactButton from 'modules/portfolio/components/ContactButton/ContactButton';
import Layout from 'modules/portfolio/components/Layout/Layout';
import Text from 'modules/portfolio/components/Text/Text';
import {
  StyledInner,
  StyledPhoto,
  StyledProfBox,
  StyledQrCode,
  StyledTextBox,
  StyledTitileBox,
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
              <Text variant="h1">Ильин Евгений</Text>
              <StyledQrCode src={qrCode} alt="QR code for telegram" width={91} height={105} />
            </StyledTitileBox>
            <StyledPhoto src={mainPhotoMobile} alt="фото Ильин Евгений" width={252} height={370} />
          </StyledInner>
          <StyledProfBox>
            <Text variant="strong">UX designer</Text>
            <Text variant="strong">Frontend developer</Text>
          </StyledProfBox>
          <StyledTextBox>
            <Text variant="p">Я — Ильин Евгений, web дизайнер, обучаюсь frontend разработке.</Text>
          </StyledTextBox>
          <ContactButton />
        </StyledWrapper>
      </Layout>
    </StyledTitleBlock>
  );
};
export default TitleBlock;
