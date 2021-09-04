import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type TitleProps = {
  font: string;
  size: number;
  align?: string;
};

export const Container = styled.Pressable`
  width: 100%;
  height: 53px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleContent = styled.View``;

export const Title = styled.Text<TitleProps>`
  color: ${theme.colors.primaryBlank};
  font-size: ${props => props.size}px;
  font-family: ${props => props.font};
  text-align: ${props => props.align || 'left'};
`;

export const Span = styled.Text`
  color: ${theme.colors.span};
`;
