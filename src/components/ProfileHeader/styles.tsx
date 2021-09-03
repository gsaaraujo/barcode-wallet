import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type TitleProps = {
  font: string;
  size: number;
};

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleContent = styled.View``;

export const Title = styled.Text<TitleProps>`
  color: ${theme.colors.primaryBlank};
  font-size: ${props => props.size}px;
  font-family: ${props => props.font};
`;

export const Wrapper = styled.Pressable`
  width: 48px;
  height: 48px;
`;

export const ProfilePhoto = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Bold = styled.Text`
  font-family: ${theme.fonts.titleFont100};
`;
