import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';

export const Routes = () => (
  <NavigationContainer>
    <AuthRoutes />
  </NavigationContainer>
);
