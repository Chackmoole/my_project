import styled from '@emotion/styled';

export const StyledSkill = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTextBox = styled.div`
  min-width: 161px;
`;

export const StyledScaleBG = styled.div`
  position: relative;
  width: 156px;
  height: 6px;
  background-color: rgba(255, 127, 17, 0.25);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 140px;
    height: 6px;
    background-color: rgba(255, 127, 17, 1);
  }
`;
