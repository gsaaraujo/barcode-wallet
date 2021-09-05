import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { theme } from '../../global/styles/theme';

import PlusSvg from '../../assets/images/plus.svg';

import { Container } from './styles';

export const PlusButton = () => {
  const { primaryBlank, buttonFeedBack } = theme.colors;

  const navigation: any = useNavigation();

  const handleGoToCameraView = () => navigation.navigate('CameraView');

  return (
    <Container
      android_ripple={{
        color: buttonFeedBack,
      }}
      onPress={handleGoToCameraView}>
      <PlusSvg stroke={primaryBlank} />
    </Container>
  );
};
