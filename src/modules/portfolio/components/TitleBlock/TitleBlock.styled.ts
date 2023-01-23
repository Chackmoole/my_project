import styled from '@emotion/styled';

import Button from 'ui/Button/Button';

export const StyledTitleBlock = styled.section`
  background: linear-gradient(
    90deg,
    rgba(18, 14, 61, 1) 0%,
    rgba(18, 14, 61, 1) 705px,
    rgba(255, 255, 255, 1) 705px
  );
`;

export const StyledWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 0 24px;
  gap: 24px;
  align-items: center;
`;

export const StyledImg = styled.img`
  margin-right: 120px;
`;

export const StyledTitileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 240px 10px 80px 118px;
  height: 100vh;
`;

export const StyledTitle = styled.h1`
  font-family: 'Merriweather', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 55px;
  letter-spacing: 4.5px;
  width: 329px;
  color: #ffffff;
  margin: 0;
`;

export const StyledContactBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledStrong = styled.strong`
  font-family: 'Merriweather', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.03em;
  color: #120e3d;
  width: 166px;

  &:last-of-type {
    margin-bottom: 56px;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #ff7f11;

  &:hover {
    background-color: #e27f29;
  }

  &:active {
    opacity: 0.75;
  }
`;
