import styled from 'styled-components/native';

type ContainerProps = {
  width: number;
  height: number;
};

export const Container = styled.View<ContainerProps>`
  width: ${props => props.width || 0}px;
  height: ${props => props.height || 0}px;
`;
