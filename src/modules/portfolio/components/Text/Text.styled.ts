import { css } from '@emotion/react';
import React from 'react';

import styled from '@emotion/styled';

interface IProps {
  variant: React.ElementType;
}

export const StyledText = styled.p<IProps>`
  color: #120e3d;
  margin: 0;

  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return css`
          font-family: 'Tahoma', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          line-height: 48px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        `;
      case 'h2':
        return css`
          font-family: 'Tahoma', sans-serif;
          font-weight: 700;
          font-size: 24px;
          line-height: 29px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          font-style: normal;
          @media (min-width: 768px) {
            font-size: 40px;
            line-height: 48px;
            letter-spacing: 0.04em;
          }
        `;
      case 'h3':
        return css`
          font-family: 'Tahoma', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          text-transform: uppercase;
        `;
      case 'h4':
        return css`
          font-family: 'Tahoma', serif;
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
          text-transform: uppercase;
        `;
      case 'h5':
        return css`
          font-family: 'Tahoma', serif;
          font-style: normal;
          font-weight: 700;
          font-size: 17px;
          line-height: 21px;
          letter-spacing: 0.115em;
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
          @media (min-width: 768px) {
            font-size: 20px;
            line-height: 24px;
            color: inherit;
          }
        `;
      case 'caption':
        return css`
          font-family: 'Tahoma', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 12px;
          line-height: 14px;
        `;
      case 'p':
        return css`
          color: #120e3d;
          margin: 0;
          font-family: 'PT Sans', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 27px;
          letter-spacing: 0.04em;
        `;
      case 'body':
        return css`
          font-family: 'PT Sans', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 150.7%;
          letter-spacing: 0.04em;
        `;
    }
  }}
`;
