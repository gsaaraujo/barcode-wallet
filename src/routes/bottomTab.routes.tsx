import React from 'react';
import { View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeSvg from '../assets/images/home.svg';
import ListSvg from '../assets/images/list.svg';

import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';
import { History } from '../screens/History';
import { PlusButton } from '../components/PlusButton';

export const BottomTabRoutes = () => {
  const { Navigator, Screen } = createBottomTabNavigator();
  const { secondaryDark, primaryBlank, background } = theme.colors;

  return (
    <>
      <View style={{position: 'absolute', bottom: 20, zIndex: 100, alignSelf: 'center'}}>
        <PlusButton />
      </View>
      <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: background,
          borderTopWidth: 0,
          elevation: 0
        },
        
      }}>
      <Screen
        name='Home'
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <HomeSvg stroke={focused ? secondaryDark : primaryBlank} />
          ),
        }}
      />
      <Screen
        name='History'
        component={History}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <ListSvg stroke={focused ? secondaryDark : primaryBlank} />
          ),
        }}
      />
    </Navigator>
    </>
  );
};
