import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  padding-left: 20px;
  padding-right: 20px;
`;

export const Title = styled.Text`
  color: ${theme.colors.primaryBlank};
  font-size: 20px;
  font-family: ${theme.fonts.titleFont100};
`;

export const Loading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
