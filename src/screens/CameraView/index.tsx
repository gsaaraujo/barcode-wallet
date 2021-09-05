import React, { useEffect } from 'react';
import { Keyboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Orientation from 'react-native-orientation';
import { RNCamera } from 'react-native-camera';

import { theme } from '../../global/styles/theme';

import { Container, Title, Border, Button } from './styles';

export const CameraView = () => {
  const { buttonFeedBack } = theme.colors;

  const navigation: any = useNavigation();

  useEffect(() => {
    Orientation.lockToLandscape();

    return () => Orientation.lockToPortrait();
  }, []);

  const handleGoToAddPaymentSlip = (code: string) =>
    navigation.navigate('AddPaymentSlip', { codebar: code });

  return (
    <Container onPress={() => Keyboard.dismiss()}>
      <RNCamera
        captureAudio={false}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({ barcodes }) => {
          if (barcodes.length !== 0) {
            handleGoToAddPaymentSlip(barcodes[0].data);
          }
        }}
      />
      <Border>
        <Button
          android_ripple={{ color: buttonFeedBack }}
          onPress={() => handleGoToAddPaymentSlip('')}>
          <Title>Or type here to insert the code manually</Title>
        </Button>
      </Border>
    </Container>
  );
};
