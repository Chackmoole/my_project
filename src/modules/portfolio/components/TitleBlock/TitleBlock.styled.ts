import styled from '@emotion/styled';

export const StyledTitleBlock = styled.section`
  background-color: #ff7f11;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //min-height: 100vh;
  height: calc(100vh - calc(100vh - 100%));
  align-items: center;
  justify-content: space-between;
  padding-top: 80px;
`;

export const StyledInner = styled.div`
  display: flex;
  align-items: end;
`;

export const StyledQrCode = styled.img``;

export const StyledPhoto = styled.img`
  border-radius: 4px;
`;

export const StyledTitileBox = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`;

export const StyledProfBox = styled.div`
  position: absolute;
  top: 400px;
  display: flex;
  flex-direction: column;
`;

export const StyledTextBox = styled.p`
  width: 300px;
`;
