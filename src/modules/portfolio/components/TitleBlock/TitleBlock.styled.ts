import styled from '@emotion/styled';

import Button from 'ui/Button/Button';

export const StyledTitleBlock = styled.section`
  background-color: #ff7f11;
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
`;

export const StyledTitle = styled.h1`
  display: none;
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
  border-radius: 4px;
`;

export const StyledTitileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`;

export const StyledContactBox = styled.div`
  position: absolute;
  top: 400px;
`;

export const StyledSubtitle = styled.strong`
  font-family: 'Tahoma', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  color: #ffffff;

  &:last-of-type {
    margin-bottom: 56px;
  }
`;

export const StyledText = styled.p`
  font-family: 'PT Sans', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150.7%;
  letter-spacing: 0.04em;
  margin: 0;
  color: #120e3d;
  width: 300px;
`;
