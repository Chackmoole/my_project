import { HashLink } from 'react-router-hash-link';

import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 320px;
  padding: 16px 16px 40px;
  margin: 0 auto;
  z-index: 99;
`;

export const StyledHeaderNav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 40px;
  }
`;

export const StyledLink = styled(HashLink)`
  text-decoration: none;
  font-family: 'Tahoma', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #120e3d;
  margin: 0;
  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 24px;
  }
`;
