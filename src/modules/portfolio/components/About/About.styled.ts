import styled from '@emotion/styled';

export const StyledAbout = styled.section`
  @media (min-width: 768px) {
    background: linear-gradient(
      90deg,
      rgba(255, 127, 17, 1) calc(50% - 180px),
      rgba(255, 255, 255, 1) calc(50% - 180px)
    );
  }
  @media (min-width: 1280px) {
    position: relative;
    overflow: hidden;
    z-index: -3;
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
    margin-left: calc(50% - 130px);
    align-items: start;
    padding-left: 60px;
    padding-right: 60px;
  }
  @media (min-width: 1280px) {
    padding: 80px 0 124px;
    z-index: 1;
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
