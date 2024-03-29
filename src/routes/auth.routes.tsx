import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';

export const AuthRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Login' component={Login} />
    </Navigator>
  );
};
