import { css } from '@emotion/react';
import React from 'react';

import styled from '@emotion/styled';

interface IProps {
  variant: React.ElementType;
}

export const StyledText = styled.p<IProps>`
  color: #120e3d;
  margin: 0;
  font-family: 'PT Sans', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.04em;
  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return css``;
      case 'h2':
        return css`
          font-family: 'Tahoma', sans-serif;
          font-weight: 700;
          font-size: 24px;
          line-height: 29px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        `;
      case 'strong':
        return css`
          font-family: 'Tahoma', sans-serif;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 0.035em;
          text-transform: uppercase;
          color: #ffffff;
        `;
    }
  }}
`;