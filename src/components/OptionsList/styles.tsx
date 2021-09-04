import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type TitleProps = {
  font: string;
  color: string;
  size: number;
};

type ButtonProps = {
  backgroundColor: string;
};

export const Container = styled.View`
  width: 100%;
  height: 400px;
  align-items: center;
  padding-left: 65px;
  padding-right: 65px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${theme.colors.secondaryDark};
`;

export const Title = styled.Text<TitleProps>`
  text-align: center;
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-family: ${props => props.font};
`;

export const Bold = styled.Text`
  font-family: ${theme.fonts.titleFont100};
`;

export const IconWrapper = styled.Pressable``;

export const ButtonContent = styled.View`
  flex-direction: row;
`;

export const Button = styled.Pressable<ButtonProps>`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 2px solid ${theme.colors.primaryDark};
  background-color: ${props => props.backgroundColor};
`;
