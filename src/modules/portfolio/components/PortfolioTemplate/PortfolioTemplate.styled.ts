import styled from '@emotion/styled';

export const StyledPortfolioTemplate = styled.a`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-decoration-color: #120e3d;
  @media (min-width: 1280px) {
    align-items: center;
    min-height: 280px;
    justify-content: space-between;
    gap: 0;
    padding: 32px;
    opacity: 0.75;

    &:hover {
      opacity: 1;
    }

    &:hover span {
      display: block;
    }

    &:active {
      opacity: 0.5;
    }
  }
`;

export const StyledLink = styled.a`
  text-decoration-color: #120e3d;
  @media (min-width: 1280px) {
    display: none;
  }
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
  display: block;

  @media (min-width: 768px) {
    width: 310px;
    height: 178px;
  }
`;
