import React, { createContext, ReactNode, useEffect, useState } from 'react';

import firestore from '@react-native-firebase/firestore';
import { useAuth } from '../hooks/useAuth';

export type PaymentSlip = {
  uid: string;
  name: string;
  dueDate: string;
  value: number;
  barcode: string;
};

export type UserContextData = {
  alreadyPaid: PaymentSlip[];
  notPaid: PaymentSlip[];
};

type Props = {
  children: ReactNode;
};

export const UserContext = createContext<UserContextData>(
  {} as UserContextData,
);

export const UserProvider = ({ children }: Props) => {
  const [alreadyPaid, setAlreadyPaid] = useState<PaymentSlip[]>([]);
  const [notPaid, setNotPaid] = useState<PaymentSlip[]>([]);

  const { currentUser } = useAuth();

  useEffect(() => {
    const handleCreateUser = async () => {
      const getUser = await firestore()
        .collection('Users')
        .doc(currentUser?.uid)
        .get();

      if (!getUser.exists) {
        firestore().collection('Users').doc(currentUser?.uid).set({
          alreadyPaid: [],
          notPaid: [],
        });
      }
    };
    handleCreateUser();
  }, []);

  return (
    <UserContext.Provider value={{ alreadyPaid, notPaid }}>
      {children}
    </UserContext.Provider>
  );
};
