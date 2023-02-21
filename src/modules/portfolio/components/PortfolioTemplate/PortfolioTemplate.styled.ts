import styled from '@emotion/styled';

export const StyledPortfolioTemplate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledLink = styled.a`
  text-decoration-color: #120e3d;
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInner = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledImg = styled.img`
  width: 200px;
  height: 115px;
  @media (min-width: 768px) {
    width: 310px;
    height: 178px;
  }
`;
