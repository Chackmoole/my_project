import styled from '@emotion/styled';

export const StyledAbout = styled.section`
  @media (min-width: 768px) {
    background: linear-gradient(90deg, rgba(255, 127, 17, 1) 30%, rgba(255, 255, 255, 1) 30%);
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  gap: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
  @media (min-width: 768px) {
    margin-left: 30%;
    align-items: start;
    padding-left: 60px;
    padding-right: 60px;
  }
`;

export const StyledList = styled.ul`
  margin: 0;
`;

export const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
