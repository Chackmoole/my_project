import React from 'react';

import Button from 'modules/portfolio/components/Button/Button';
import Layout from 'modules/portfolio/components/Layout/Layout';
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
import Text from 'modules/portfolio/components/Typography/Text';

import mainPhotoMobile from 'src/img/mainPhotoMobile.jpg';
import qrCode from 'src/img/qr_telegram.jpg';

const TitleBlock = () => {
  return (
    <StyledTitleBlock>
      <Layout>
        <StyledWrapper>
          <StyledInner>
            <StyledTitileBox>
              <Text as="h1" variant="h1">
                Ильин Евгений
              </Text>
              <StyledQrCode src={qrCode} alt="QR code for telegram" width={91} height={105} />
            </StyledTitileBox>
            <StyledPhoto src={mainPhotoMobile} alt="фото Ильин Евгений" width={252} height={370} />
          </StyledInner>
          <StyledProfBox>
            <Text as="strong" variant="strong">
              UX designer
            </Text>
            <Text as="strong" variant="strong">
              Frontend developer
            </Text>
          </StyledProfBox>
          <StyledTextBox>
            <Text as="p" variant="p">
              Я — Ильин Евгений, web дизайнер, обучаюсь frontend разработке.
            </Text>
          </StyledTextBox>
          <Button>Написать мне</Button>
        </StyledWrapper>
      </Layout>
    </StyledTitleBlock>
  );
};
export default TitleBlock;
