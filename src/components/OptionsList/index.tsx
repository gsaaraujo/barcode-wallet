import React from 'react';

import { theme } from '../../global/styles/theme';

import ExitSvg from '../../assets/images/x-square.svg';

import { useUser } from '../../hooks/useUser';
import { PaymentSlip } from '../../context/userProvider';

import { Spacer } from '../Spacer';

import {
  Container,
  Title,
  Bold,
  IconWrapper,
  ButtonContent,
  Button,
} from './styles';

type Props = {
  item: PaymentSlip;
  handleOptListModal: () => void;
};

export const OptionsList = ({ item, handleOptListModal }: Props) => {
  const { titleFont100, subtitleFont } = theme.fonts;
  const {
    titleColor100,
    primaryDark,
    primaryBlank,
    secondaryDark,
    buttonFeedBack,
    buttonFeedBackWhite,
  } = theme.colors;

  const { handleDeletePaymentSlip } = useUser();
  console.log(item.uid);
  return (
    <Container>
      <Spacer height={16} />
      <IconWrapper
        android_ripple={{ color: buttonFeedBack, borderless: true }}
        onPress={handleOptListModal}>
        <ExitSvg stroke={primaryDark} />
      </IconWrapper>
      <Spacer height={39} />

      <Title font={subtitleFont} color={titleColor100} size={20}>
        Has the <Bold>{item.name}</Bold> in the amount of
        <Bold> $ {item.value}</Bold> been paid ?
      </Title>

      <Spacer height={67} />

      <ButtonContent>
        <Button
          android_ripple={{
            color: buttonFeedBackWhite,
          }}
          backgroundColor={primaryDark}>
          <Title font={titleFont100} color={primaryBlank} size={16}>
            Yes
          </Title>
        </Button>

        <Spacer width={20} />

        <Button
          android_ripple={{
            color: buttonFeedBack,
          }}
          backgroundColor={secondaryDark}
          onPress={handleOptListModal}>
          <Title font={titleFont100} color={primaryDark} size={16}>
            Not yet
          </Title>
        </Button>
      </ButtonContent>

      <Spacer height={45} />

      <Button
        android_ripple={{
          color: buttonFeedBackWhite,
        }}
        backgroundColor={primaryDark}
        style={{ width: 165 }}
        onPress={() => handleDeletePaymentSlip(item.uid)}>
        <Title font={titleFont100} color={primaryBlank} size={16}>
          Delete payment
        </Title>
      </Button>
    </Container>
  );
};
