import React, { useRef } from 'react';
import { Animated } from 'react-native';

import { theme } from '../../global/styles/theme';
import GoogleSvg from '../../assets/images/google-icon.svg';

import {
  Container,
  TitleContent,
  Title,
  Span,
  LoginButton,
  IconWrapper,
  LoginButtonTitle,
} from './styles';
import { Spacer } from '../../components/Spacer';

export const Home = () => {
  const { titleColor0, buttonFeedBack } = theme.colors;
  const increase = useRef(new Animated.Value(1)).current;

  Animated.timing(increase, {
    toValue: 0,
    duration: 5000,
    useNativeDriver: true,
  }).start();

  return (
    <Container>
      <TitleContent>
        <Title color={titleColor0} size={36}>
          Your <Span>barcode payments slips</Span> in one place
        </Title>
      </TitleContent>

      <LoginButton android_ripple={{ color: buttonFeedBack }}>
        <IconWrapper>
          <GoogleSvg />
        </IconWrapper>

        <LoginButtonTitle>Connect with Google</LoginButtonTitle>
      </LoginButton>

      <Spacer height={58} />
    </Container>
  );
};
