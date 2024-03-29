import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: flex;
  gap: 16px;
  align-items: center;
  background-color: #ff7f11;
  color: #ffffff;
  border-radius: 4px;
  border: 1px solid #ffffff;
  font-family: 'Tahoma', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.23em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 16px;

  &:hover {
    background-color: #e27f29;
  }

  &:active {
    opacity: 0.75;
  }
`;
