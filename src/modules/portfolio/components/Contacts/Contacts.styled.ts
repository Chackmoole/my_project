import styled from '@emotion/styled';

export const StyledContacts = styled.section`
  @media (min-width: 768px) {
    background: linear-gradient(
      90deg,
      rgba(255, 127, 17, 1) calc(50% - 180px),
      rgba(255, 255, 255, 1) calc(50% - 180px)
    );
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  min-height: 100vh;
  padding-top: 24px;
  padding-bottom: 24px;
  @media (min-width: 768px) {
    margin-left: calc(50% - 130px);
    align-items: start;
    padding-left: 60px;
    padding-right: 60px;
  } ;
`;

export const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 80px;
  width: 100%;
`;

export const StyledContactsText = styled.p`
  font-family: 'PT Sans', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #ff7f11;
  width: 100%;
  text-align: end;
  margin: 0;
`;
