import React from 'react';

import { theme } from '../../global/styles/theme';

import ExitSvg from '../../assets/images/x-square.svg';

import { Spacer } from '../Spacer';

import { Container, Title, IconWrapper, ButtonContent, Button } from './styles';

type Props = {
  handleLogOutModal: () => void;
};

export const SignOut = ({ handleLogOutModal }: Props) => {
  const { titleFont100, subtitleFont } = theme.fonts;
  const {
    titleColor100,
    primaryDark,
    primaryBlank,
    secondaryDark,
    buttonFeedBack,
    buttonFeedBackWhite,
  } = theme.colors;

  return (
    <Container>
      <Spacer height={16} />
      <IconWrapper
        android_ripple={{ color: buttonFeedBack, borderless: true }}
        onPress={handleLogOutModal}>
        <ExitSvg stroke={primaryDark} />
      </IconWrapper>
      <Spacer height={47} />

      <Title font={subtitleFont} color={titleColor100} size={20}>
        Would you like{'\n'} to leave?
      </Title>

      <Spacer height={60} />

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
          onPress={handleLogOutModal}>
          <Title font={titleFont100} color={primaryDark} size={16}>
            No
          </Title>
        </Button>
      </ButtonContent>
    </Container>
  );
};
