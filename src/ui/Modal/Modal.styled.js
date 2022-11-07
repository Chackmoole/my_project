import styled from '@emotion/styled';

export const StyledModal = styled.div`
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
