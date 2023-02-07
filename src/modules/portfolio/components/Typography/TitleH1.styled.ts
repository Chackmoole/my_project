import styled from '@emotion/styled';

type IProps = {
  size: string;
};

export const StyledTypography = styled.h1<IProps>`
  font-size: ${(props) => props.size};
`;
