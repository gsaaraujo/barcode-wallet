import React, { useState, useEffect, createContext, ReactNode } from 'react';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { GOOGLE_WEB_CLIENT_ID } from 'react-native-dotenv';

type User = {
  uid: string;
  name: string;
  photoUrl: string;
};

type AuthContextData = {
  currentUser: User | null;
  handleGoogleSignIn: () => Promise<number>;
};

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleOnAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    if (user) {
      const defaultPhotoUrl =
        'https://images.unsplash.com/photo-1606385837831-6ea825323564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80';

      const availableUser = {
        uid: user.uid,
        name: user.displayName || '',
        photoUrl: user.photoURL || defaultPhotoUrl,
      };

      setCurrentUser(availableUser);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(handleOnAuthStateChanged);

    return subscriber;
  }, []);

  const handleGoogleSignIn = async (): Promise<number> => {
    GoogleSignin.configure({
      webClientId: GOOGLE_WEB_CLIENT_ID,
    });

    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      await auth().signInWithCredential(googleCredential);

      return 1;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);

      return 0;
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, handleGoogleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};
