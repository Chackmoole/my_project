import { css } from '@emotion/react';

import styled from '@emotion/styled';

interface IProps {
  variant: string;
}

export const StyledText = styled.p<IProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return css`
          font-size: 0;
        `;
      case 'h2':
        return css`
          font-family: 'Tahoma', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 29px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #120e3d;
        `;
      case 'strong':
        return css`
          font-family: 'Tahoma', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 0.035em;
          text-transform: uppercase;
          color: #ffffff;
        `;
      case 'p':
        return css`
          font-family: 'PT Sans', serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 150.7%;
          letter-spacing: 0.04em;
          margin: 0;
          color: #120e3d;
        `;
    }
  }}
`;
