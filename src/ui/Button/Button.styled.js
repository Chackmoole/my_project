import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  padding: 8px;
  font-size: 12px;
  background-color: royalblue;
  color: #e7ebf0;
  border-radius: 4px;
  border: 1px solid royalblue;
  opacity: 0.9;
  transition: opacity ease 0.5s;

  &:hover {
    opacity: 1;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
      0px 1px 3px 0px rgb(0 0 0 / 12%);
  }

  &:active {
    opacity: 0.7;
  }

  ${(props) =>
    props.variant === 'outlined' &&
    css`
      background-color: transparent;
      color: royalblue;
    `}
`;
