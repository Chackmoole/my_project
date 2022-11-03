import styled from '@emotion/styled';

export const StyledCrossButton = styled.button`
  position: absolute;
  top: 30px;
  right: 20px;
  width: 24px;
  height: 24px;
  opacity: 0.2;
  cursor: pointer;
  background-color: transparent;
  border-radius: 4px;
  transition: opacity ease 0.5s;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 0.7;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 9px;
    left: 0;
    display: block;
    width: 20px;
    height: 2px;
    background: #000;
  }

  &::before {
    transform: rotate(-45deg);
  }

  &::after {
    transform: rotate(45deg);
  }
`;
