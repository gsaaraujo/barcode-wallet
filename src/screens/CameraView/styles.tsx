import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type BorderProps = {
  backgroundColor: string;
};

export const Container = styled.Pressable`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${theme.colors.primaryBlank};
  font-family: ${theme.fonts.titleFont100};
`;

export const Border = styled.View<BorderProps>`
  width: 100%;
  height: 30%;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
`;

export const Button = styled.Pressable`
  width: 400px;
  height: 50px;
  font-size: 16px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primaryDark};
  font-family: ${theme.fonts.titleFont100};
  background-color: ${theme.colors.secondaryDark};
`;
