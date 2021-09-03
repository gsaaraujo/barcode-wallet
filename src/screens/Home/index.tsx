import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import Modal from 'react-native-modal';

import { theme } from '../../global/styles/theme';

import { useAuth } from '../../hooks/useAuth';
import { PaymentSlip } from '../../context/userProvider';

import { Spacer } from '../../components/Spacer';
import { SignOut } from '../../components/SignOut';
import { ProfileHeader } from '../../components/ProfileHeader';
import { SeparatorList } from '../../components/SeparatorList';
import { PaymentSlipItem } from '../../components/PaymentSlipItem';

import { Container, Title, Bold, TotalQuantity } from './styles';
import { fakeData } from '../../utils/fakeData';
import { FooterList } from '../../components/FooterList';

export const Home = () => {
  const [logOutModal, setLogOutModal] = useState(false);
  const [notPaid, setNotPaid] = useState<PaymentSlip[]>([]);

  const { currentUser } = useAuth();

  const { titleFont100, subtitleFont } = theme.fonts;
  // const { titleColor100, titleColor0, secondaryDark } = theme.colors;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    handleGetNotPaid();
  }, []);

  const handleLogOutModal = () => setLogOutModal(!logOutModal);

  const handleTotalAmount = (): number => {
    let sum = 0;

    notPaid.forEach(each => {
      sum += each.value;
    });

    return sum;
  };

  const handleGetNotPaid = () => {
    setNotPaid(fakeData);
  };

  return (
    <Container>
      <Spacer height={20} />

      <ProfileHeader
        title={currentUser?.name}
        photoUrl={currentUser?.photoUrl}
        handleLogOutModal={handleLogOutModal}
      />

      <Modal
        isVisible={logOutModal}
        style={{ marginHorizontal: 0, justifyContent: 'flex-end' }}>
        <SignOut handleLogOutModal={handleLogOutModal} />
      </Modal>

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

      <FlatList
        data={notPaid}
        keyExtractor={item => item.uid}
        renderItem={({ item }) => <PaymentSlipItem data={item} />}
        ItemSeparatorComponent={() => <SeparatorList />}
        showsVerticalScrollIndicator={false}
      />

      <FooterList amount={handleTotalAmount()} />
    </Container>
  );
};
