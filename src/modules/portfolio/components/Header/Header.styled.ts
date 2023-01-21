import { NavLink } from 'react-router-dom';

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

export const StyledLogoText = styled.span`
  font-family: 'Merriweather', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
  margin-left: 16px;
`;

export const StyledHeaderNav = styled.nav`
  display: flex;
  gap: 54px;
`;

export const StyledNavLink = styled(NavLink)`
  font-family: 'PT Sans', 'serif';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  text-decoration: none;
  color: #120e3d;
`;
