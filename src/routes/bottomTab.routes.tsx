import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeSvg from '../assets/images/home.svg';

import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';

export const BottomTabRoutes = () => {
  const { Navigator, Screen } = createBottomTabNavigator();
  const { secondaryDark, primaryBlank, background } = theme.colors;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: background,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => (
          <HomeSvg stroke={focused ? secondaryDark : primaryBlank} />
        ),
      }}>
      <Screen name='Home' component={Home} />
    </Navigator>
  );
};
