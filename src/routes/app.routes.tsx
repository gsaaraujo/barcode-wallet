import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../global/styles/theme';

import { BottomTabRoutes } from './bottomTab.routes';

import { CameraView } from '../screens/CameraView';

export const AppRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  const { primaryDark, primaryBlank } = theme.colors;

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='BottomTabRoutes' component={BottomTabRoutes} />
      <Screen
        name='CameraView'
        component={CameraView}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: primaryDark,
          },
          headerTintColor: primaryBlank,
          title: 'Scan the payment slip ',
        }}
      />
    </Navigator>
  );
};
