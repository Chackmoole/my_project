import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  padding: 8px;
  font-size: 12px;
  background-color: royalblue;
  color: #e7ebf0;
  border-radius: 4px;
  border: 1px solid royalblue;

  ${(props) =>
    props.variant === 'outlined' &&
    css`
      background-color: transparent;
      color: royalblue;
    `}
`;
