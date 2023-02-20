import styled from '@emotion/styled';

export const StyledTitleBlock = styled.section`
  background-color: #ff7f11;

  @media (min-width: 768px) {
    background: linear-gradient(90deg, rgba(255, 127, 17, 1) 40%, rgba(255, 255, 255, 1) 40%);
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
    padding-top: 168px;
  }
`;

export const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  @media (min-width: 768px) {
    margin-left: 46%;
    align-items: start;
    gap: 0;
  }
`;

export const StyledQrCode = styled.img``;

export const StyledPhoto = styled.img`
  border-radius: 4px;
  margin-bottom: 8px;
  width: 252px;
  height: 370px;
  @media (min-width: 768px) {
    margin-left: 15%;
    margin-bottom: 24px;
    width: 312px;
    height: 458px;
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
  @media (min-width: 768px) {
    width: 330px;
    margin-bottom: 54px;
  }
`;
