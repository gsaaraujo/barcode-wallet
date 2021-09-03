import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/useAuth';

import { AppRoutes } from './app.routes';

import { AuthRoutes } from './auth.routes';
import { UserProvider } from '../context/userProvider';

export const Routes = () => {
  const { currentUser } = useAuth();

  return (
    <NavigationContainer>
      {currentUser ? (
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      ) : (
        <AuthRoutes />
      )}
    </NavigationContainer>
  );
};
