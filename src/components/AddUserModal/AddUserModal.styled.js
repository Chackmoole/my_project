import styled from 'styled-components';

export const StyledAddUserBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 100;
`;

export const StyledAddUserModal = styled.div`
  position: fixed;
  background-color: red;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 200px;
  min-height: 100px;
  padding: 36px;
  z-index: 101;
`;
