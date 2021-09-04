import React from 'react';

import { theme } from '../../global/styles/theme';

import PlusSvg from '../../assets/images/plus.svg';

import { Container } from './styles';

export const PlusButton = () => {
  const { primaryBlank } = theme.colors;

  return (
    <Container>
      <PlusSvg stroke={primaryBlank} />
    </Container>
  );
};
