import React from 'react';

import { theme } from '../../global/styles/theme';
import GoogleSvg from '../../assets/images/google-icon.svg';

import { useAuth } from '../../hooks/useAuth';

import { Spacer } from '../../components/Spacer';

import {
  Container,
  TitleContent,
  Title,
  Span,
  LoginButton,
  IconWrapper,
  LoginButtonTitle,
} from './styles';

export const Login = () => {
  const { titleColor0, buttonFeedBack } = theme.colors;

  const { handleGoogleSignIn } = useAuth();

  return (
    <Container>
      <TitleContent>
        <Title color={titleColor0} size={36}>
          Your <Span>barcode payments slips</Span> in one place
        </Title>
      </TitleContent>

      <LoginButton
        android_ripple={{ color: buttonFeedBack }}
        onPress={handleGoogleSignIn}>
        <IconWrapper>
          <GoogleSvg />
        </IconWrapper>

        <LoginButtonTitle>Connect with Google</LoginButtonTitle>
      </LoginButton>

      <Spacer height={58} />
    </Container>
  );
};
