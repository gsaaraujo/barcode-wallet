import React from 'react';

import { Container } from './styles';

type Props = {
  width?: number;
  height?: number;
};

export const Spacer = ({ width = 0, height = 0 }: Props) => (
  <Container width={width} height={height} />
);
