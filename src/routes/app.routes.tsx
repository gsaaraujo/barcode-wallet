import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTabRoutes } from './bottomTab.routes';

export const AppRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='BottomTabRoutes' component={BottomTabRoutes} />
    </Navigator>
  );
};
