import styled from '@emotion/styled';

type IProps = {
  size: string;
};

export const StyledTitleH2 = styled.h2<IProps>`
  font-size: ${(props) => props.size};
`;
