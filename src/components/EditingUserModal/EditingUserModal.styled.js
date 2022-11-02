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

export const StyledEditingUserModal = styled.div`
  position: fixed;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 400px;
  min-height: 200px;
  padding: 36px;
  border-radius: 4px;
  z-index: 101;
`;

export const StyledModalActions = styled.div`
  display: flex;
  gap: 24px;
`;

export const StyledH3 = styled.h3`
  font-size: 20px;
  margin-bottom: 24px;
`;
