import styled from 'styled-components';

export const StyledCrossButton = styled.button`
  position: absolute;
  top: 30px;
  right: 20px;
  width: 24px;
  height: 24px;
  opacity: 0.2;
  cursor: pointer;
  transition: opacity ease 0.5s;

  &:hover {
    opacity: 1;
  }

  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 9px;
    left: 1px;
    display: block;
    width: 20px;
    height: 2px;
    background: #000;
  }

  ::before {
    transform: rotate(-45deg);
  }

  ::after {
    transform: rotate(45deg);
  }
`;
