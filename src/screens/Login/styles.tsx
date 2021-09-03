import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type TitleProps = {
  color: string;
  size: number;
};

export const Container = styled.View`
  flex: 1;
  padding-left: 70px;
  padding-right: 70px;
  background-color: ${theme.colors.background};
`;

export const TitleContent = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text<TitleProps>`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-family: ${theme.fonts.titleFont100};
  text-align: center;
`;

export const Span = styled.Text`
  color: ${theme.colors.span};
`;

export const LoginButton = styled.Pressable`
  width: 100%;
  height: 56px;
  border-radius: 5px;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.primaryBlank};
`;

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-right-width: 2px;
  border-right-color: #e9e9eb;
`;

export const LoginButtonTitle = styled.Text`
  flex: 1;
  font-size: 15px;
  text-align: center;
  color: ${theme.colors.titleColor100};
  font-family: ${theme.fonts.titleFont100};
`;
