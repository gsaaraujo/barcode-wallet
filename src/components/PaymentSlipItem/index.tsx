import React from 'react';
import { PaymentSlip } from '../../context/userProvider';

import { theme } from '../../global/styles/theme';

import { Container, TitleContent, Title, Span } from './styles';

type Props = {
  data: PaymentSlip;
};

export const PaymentSlipItem = ({ data }: Props) => {
  const { titleFont100, subtitleFont } = theme.fonts;

  return (
    <Container>
      <TitleContent>
        <Title font={titleFont100} size={17}>
          {data.name}
        </Title>
        <Title font={subtitleFont} size={13}>
          Due date {data.dueDate}
        </Title>
      </TitleContent>

      <Title font={titleFont100} size={17}>
        <Span>$ </Span>
        {data.value}
      </Title>
    </Container>
  );
};
