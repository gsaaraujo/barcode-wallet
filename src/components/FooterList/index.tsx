import React from 'react';

import { Container, Title, Span } from './styles';

type Props = {
  amount: number;
};

export const FooterList = ({ amount }: Props) => (
  <Container>
    <Title>Total</Title>
    <Title>
      <Span>$</Span> {amount.toFixed(2)}
    </Title>
  </Container>
);
