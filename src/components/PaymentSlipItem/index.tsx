import React, { useState } from 'react';

import Modal from 'react-native-modal';

import { theme } from '../../global/styles/theme';

import { PaymentSlip } from '../../context/userProvider';

import { Container, TitleContent, Title, Span } from './styles';
import { OptionsList } from '../OptionsList';

type Props = {
  data: PaymentSlip;
  disableOptions?: boolean;
};

export const PaymentSlipItem = ({ data, disableOptions = true }: Props) => {
  const [optListModal, setOptListModal] = useState(false);
  const { titleFont100, subtitleFont } = theme.fonts;

  const handleOptListModal = () => setOptListModal(!optListModal);

  return (
    <Container
      style={({ pressed }) => ({ opacity: pressed ? 0.3 : 1 })}
      disabled={disableOptions}
      onPress={handleOptListModal}>
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

      <Modal
        isVisible={optListModal}
        style={{ marginHorizontal: 0, justifyContent: 'flex-end' }}>
        <OptionsList item={data} handleOptListModal={handleOptListModal} />
      </Modal>
    </Container>
  );
};
