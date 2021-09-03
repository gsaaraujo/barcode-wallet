import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';

export const BottomTabRoutes = () => {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Home' component={Home} />
    </Navigator>
  );
};
