import styled from '@emotion/styled';

export const StyledPageLayout = styled.div`
  max-width: 1440px;
  min-width: 540px;
  margin: 0 auto;
  min-height: 100vh;
  height: calc(100vh - calc(100vh - 100%));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px;
`;
