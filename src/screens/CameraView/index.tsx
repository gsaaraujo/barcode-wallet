import React, { useEffect } from 'react';
import { Keyboard } from 'react-native';

import Orientation from 'react-native-orientation';
import { RNCamera } from 'react-native-camera';

import { theme } from '../../global/styles/theme';

import { Container, Title, Border, Button } from './styles';

export const CameraView = () => {
  const { primaryBlank, buttonFeedBack } = theme.colors;

  useEffect(() => {
    Orientation.lockToLandscape();

    return () => Orientation.lockToPortrait();
  }, []);

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
          console.log(barcodes);
        }}
      />
      <Border backgroundColor={primaryBlank}>
        <Button android_ripple={{ color: buttonFeedBack }}>
          <Title>Or type here to insert the code manually</Title>
        </Button>
      </Border>
    </Container>
  );
};
