import styled from '@emotion/styled';

export const StyledTitleBlock = styled.section`
  background-color: #ff7f11;

  @media (min-width: 768px) {
    background: linear-gradient(
      90deg,
      rgba(255, 127, 17, 1) calc(50% - 80px),
      rgba(255, 255, 255, 1) calc(50% - 80px)
    );
  }
`;

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: space-between;
  padding-top: 80px;
  padding-bottom: 24px;
  @media (min-width: 768px) {
    align-items: start;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  @media (min-width: 768px) {
    margin-left: calc(50% - 24px);
    align-items: start;
    gap: 0;
  }
  @media (min-width: 1280px) {
    margin-left: 100px;
  }
`;

export const StyledQrCode = styled.img``;

export const StyledPicture = styled.picture`
  @media (min-width: 768px) {
    margin-left: calc(50% - 240px);
    margin-bottom: 24px;
    width: 312px;
    height: 458px;
  }
  @media (min-width: 1280px) {
    width: 476px;
    height: 700px;
    margin-left: calc(50% - 320px);
    margin-bottom: 0;
  }
`;

export const StyledPhoto = styled.img`
  border-radius: 4px;
  margin-bottom: 8px;
  width: 252px;
  height: 370px;
  @media (min-width: 768px) {
    width: 312px;
    height: 458px;
  }
  @media (min-width: 1280px) {
    width: 476px;
    height: 700px;
  }
`;

export const StyledTitileBox = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
  @media (min-width: 768px) {
    display: flex;
    margin-bottom: 24px;
  }
`;

export const StyledProfBox = styled.div`
  position: absolute;
  top: 400px;
  left: 64px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 16px;
    color: rgba(255, 127, 17, 0.7);

    &::before {
      content: '';
      position: absolute;
      background-color: rgba(255, 127, 17, 0.7);
      width: 30px;
      height: 3px;
      left: -40px;
      top: 50%;
    }
  } ;
`;

export const StyledTextBox = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  @media (min-width: 768px) {
    width: 330px;
  }
  @media (min-width: 1280px) {
    width: 330px;
    min-height: 160px;
    justify-content: space-between;
  }
`;
