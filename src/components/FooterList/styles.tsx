import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 56px;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  color: ${theme.colors.primaryBlank};
  font-size: 17px;
  font-family: ${theme.fonts.titleFont100};
`;

export const Span = styled.Text`
  color: ${theme.colors.span};
`;
