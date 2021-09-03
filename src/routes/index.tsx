import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/useAuth';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export const Routes = () => {
  const { currentUser } = useAuth();

  return (
    <NavigationContainer>
      {currentUser ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
