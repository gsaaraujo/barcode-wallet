import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type TitleProps = {
  font: string;
  size: number;
  align?: string;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  padding-left: 20px;
  padding-right: 20px;
`;

export const Title = styled.Text<TitleProps>`
  color: ${theme.colors.titleColor0};
  font-size: ${props => props.size}px;
  font-family: ${props => props.font};
  text-align: ${props => props.align || 'left'};
`;

export const Bold = styled.Text`
  font-family: ${theme.fonts.titleFont100};
`;

export const TotalQuantity = styled.View`
  width: 80%;
  height: 64px;
  align-self: center;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.secondaryDark};
`;

export const Loading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const PlusButtonContent = styled.View`
  bottom: -20px;
  z-index: 100;
  position: absolute;
  align-self: center;
`;
