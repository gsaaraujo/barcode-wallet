import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type TitleProps = {
  size: number;
};

export const Container = styled.Pressable`
  flex: 1;
  padding: 0px 20px 40px;
  background-color: ${theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
`;

export const Title = styled.Text<TitleProps>`
  color: ${theme.colors.primaryBlank};
  font-size: ${props => props.size}px;
  font-family: ${theme.fonts.titleFont100};
`;

export const Button = styled.Pressable`
  width: 200px;
  height: 45px;
  border-radius: 5px;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.secondaryDark};
`;

export const InputContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  font-size: 15px;
  padding-left: 20px;
  color: ${theme.colors.secondaryDark};
  font-family: ${theme.fonts.subtitleFont};
`;

export const ErrorMessage = styled.Text`
  font-size: 13px;
  color: ${theme.colors.warning};
  font-family: ${theme.fonts.titleFont100};
`;
