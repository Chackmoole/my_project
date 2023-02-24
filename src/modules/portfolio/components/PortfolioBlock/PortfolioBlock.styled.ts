import styled from '@emotion/styled';

export const StyledPortfolioBlock = styled.section`
  @media (min-width: 768px) {
    background: linear-gradient(
      90deg,
      rgba(255, 127, 17, 1) calc(50% - 180px),
      rgba(255, 255, 255, 1) calc(50% - 180px)
    );
  }
`;

export const StyledWrapper = styled.div`
  padding-top: 16px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  align-items: center;
  min-height: 100vh;
  @media (min-width: 768px) {
    margin-left: calc(50% - 130px);
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;
