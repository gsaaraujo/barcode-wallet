import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';

import { Routes } from './src/routes';
import { AuthProvider } from './src/context/authProvider';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
