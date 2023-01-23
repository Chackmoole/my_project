import styled from '@emotion/styled';

export const StyledHeader = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  width: 100%;
  padding: 0 24px;
`;

export const StyledHeaderInner = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledHeaderNav = styled.nav`
  display: flex;
  gap: 54px;
`;

export const StyledLink = styled.a`
  font-family: 'PT Sans', 'serif';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  text-decoration: none;
  color: #120e3d;
`;
