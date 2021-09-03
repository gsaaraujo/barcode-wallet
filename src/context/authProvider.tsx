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
      setCurrentUser({
        uid: user.uid,
        name: user.displayName || '',
        photoUrl: user.photoURL || '',
      });
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
