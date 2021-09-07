import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import { theme } from '../../global/styles/theme';

import { useAuth } from '../../hooks/useAuth';
import { PaymentSlip } from '../../context/userProvider';

import { Spacer } from '../../components/Spacer';
import { FooterList } from '../../components/FooterList';
import { SeparatorList } from '../../components/SeparatorList';
import { ProfileHeader } from '../../components/ProfileHeader';
import { PaymentSlipItem } from '../../components/PaymentSlipItem';

import {
  Container,
  Title,
  Bold,
  TotalQuantity,
  Loading,
} from './styles';

export const Home = () => {
  const [notPaid, setNotPaid] = useState<PaymentSlip[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { currentUser } = useAuth();

  const { secondaryDark } = theme.colors;
  const { titleFont100, subtitleFont } = theme.fonts;

  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          setNotPaid(documentSnapshot.data().notPaid);
        });

        setIsLoading(false);
      });

    return () => subscriber();
  }, []);

  const handleTotalAmount = (): number => {
    let sum = 0;

    notPaid.forEach(each => {
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

      <Spacer height={40} />

      <TotalQuantity>
        <Title font={subtitleFont} size={14} align='center'>
          You still have <Bold>5 payments slips</Bold> registered to pay
        </Title>
      </TotalQuantity>

      <Spacer height={55} />

      <Title font={titleFont100} size={20}>
        My payments slips
      </Title>

      <Spacer height={38} />

      {isLoading ? (
        <Loading>
          <ActivityIndicator size='large' color={secondaryDark} />
        </Loading>
      ) : (
        <FlatList
          data={notPaid}
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
