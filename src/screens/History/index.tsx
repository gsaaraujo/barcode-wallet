import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import { theme } from '../../global/styles/theme';

import { useAuth } from '../../hooks/useAuth';
import { PaymentSlip } from '../../context/userProvider';

import { Spacer } from '../../components/Spacer';
import { ProfileHeader } from '../../components/ProfileHeader';
import { SeparatorList } from '../../components/SeparatorList';
import { PaymentSlipItem } from '../../components/PaymentSlipItem';

import { Container, Title, Loading } from './styles';
import { FooterList } from '../../components/FooterList';

export const History = () => {
  const [alreadyPaid, setAlreadyPaid] = useState<PaymentSlip[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { secondaryDark } = theme.colors;

  const { currentUser } = useAuth();

  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          setAlreadyPaid(documentSnapshot.data().alreadyPaid);
        });

        setIsLoading(false);
      });

    return () => subscriber();
  }, []);

  const handleTotalAmount = (): number => {
    let sum = 0;

    alreadyPaid.forEach(each => {
      sum += each.value;
    });

    return sum;
  };

  return (
    <Container>
      <Spacer height={20} />

      <ProfileHeader
        title={currentUser?.name}
        photoUrl={currentUser?.photoUrl}
      />

      <Spacer height={72} />
      <Title>Paid ones</Title>
      <Spacer height={38} />

      {isLoading ? (
        <Loading>
          <ActivityIndicator size='large' color={secondaryDark} />
        </Loading>
      ) : (
        <FlatList
          data={alreadyPaid}
          keyExtractor={item => item.uid}
          renderItem={({ item }) => (
            <PaymentSlipItem data={item} disableOptions={false} />
          )}
          ItemSeparatorComponent={() => <SeparatorList />}
          showsVerticalScrollIndicator={false}
        />
      )}

      <FooterList amount={handleTotalAmount()} />
    </Container>
  );
};
