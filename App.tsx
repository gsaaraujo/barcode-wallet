import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';
import { Routes } from './src/routes';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Routes />
    </>
  );
};
