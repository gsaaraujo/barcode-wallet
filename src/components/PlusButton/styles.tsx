import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.Pressable`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.secondaryDark};
`;
