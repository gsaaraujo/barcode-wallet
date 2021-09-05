import React, { createContext, ReactNode, useEffect } from 'react';
import { Alert } from 'react-native';

import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

import uuid from 'react-native-uuid';

import { useAuth } from '../hooks/useAuth';

export type PaymentSlip = {
  uid: string;
  name: string;
  dueDate: string;
  value: number;
  barcode: string;
};

export type UserContextData = {
  // eslint-disable-next-line no-unused-vars
  handleAddPaymentSlipt: (newPaymentSlip: PaymentSlip) => Promise<number>;
  // eslint-disable-next-line no-unused-vars
  handleDeletePaymentSlip: (uid: string) => Promise<number>;
};

type Props = {
  children: ReactNode;
};

export const UserContext = createContext<UserContextData>(
  {} as UserContextData,
);

export const UserProvider = ({ children }: Props) => {
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

  const handleAddPaymentSlipt = async (
    newPaymentSlip: PaymentSlip,
  ): Promise<number> => {
    newPaymentSlip.uid = uuid.v4() as string;

    try {
      await firestore()
        .collection('Users')
        .doc(currentUser?.uid)
        .update({
          notPaid: firebase.firestore.FieldValue.arrayUnion(newPaymentSlip),
        });

      return 1;
    } catch (error) {
      Alert.alert('Sorry for the inconvenience', 'Please try again later');

      return 0;
    }
  };

  const handleDeletePaymentSlip = async (uid: string): Promise<number> => {
    try {
      const userDocument = await firestore()
        .collection('Users')
        .doc(currentUser?.uid)
        .get();

      let result = userDocument.data()?.notPaid;
      result = result.filter((each: any) => each.uid !== uid);

      await firestore().collection('Users').doc(currentUser?.uid).update({
        notPaid: result,
      });

      return 1;
    } catch (error) {
      Alert.alert('Sorry for the inconvenience', 'Please try again later');
      return 0;
    }
  };

  return (
    <UserContext.Provider
      value={{ handleAddPaymentSlipt, handleDeletePaymentSlip }}>
      {children}
    </UserContext.Provider>
  );
};
