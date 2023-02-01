import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 320px;
  max-width: 959px;
  padding: 16px 16px 40px;
  margin: 0 auto;
`;

export const StyledHeaderNav = styled.nav`
  //display: flex;
  display: none;
  gap: 54px;
`;

export const StyledLink = styled.a`
  font-family: 'PT Sans', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  text-decoration: none;
  color: #120e3d;
`;

export const StyledLogoLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 135px;
  font-family: 'Tahoma', 'serif';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.015em;
  color: #ffffff;
  text-decoration: none;
`;
