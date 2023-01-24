import styled from '@emotion/styled';

import Button from 'ui/Button/Button';

export const StyledTitleBlock = styled.section`
  //background: linear-gradient(
  //  90deg,
  //  rgba(18, 14, 61, 1) 0%,
  //  rgba(18, 14, 61, 1) 705px,
  //  rgba(255, 255, 255, 1) 705px
  //);
  background-color: #120e3d;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: space-between;
  padding-top: 80px;
`;

export const StyledInner = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 40px;
`;

export const StyledTitle = styled.h1`
  font-family: 'Merriweather', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
  margin: 0;
  width: 120px;
  margin-bottom: 40px;
`;

export const StyledQrCode = styled.img`
  display: none;
`;

export const StyledPhoto = styled.img`
  margin-left: -40px;
`;

export const StyledTitileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`;

export const StyledContactBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledSubtitle = styled.strong`
  font-family: 'Merriweather', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.03em;
  color: #ffffff;
  width: 166px;

  &:last-of-type {
    margin-bottom: 56px;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #ff7f11;
  margin-bottom: 24px;

  &:hover {
    background-color: #e27f29;
  }

  &:active {
    opacity: 0.75;
  }
`;
