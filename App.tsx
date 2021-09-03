import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <></>;
};
