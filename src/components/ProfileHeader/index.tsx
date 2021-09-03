import React from 'react';

import { theme } from '../../global/styles/theme';

import {
  Container,
  TitleContent,
  Title,
  Bold,
  Wrapper,
  ProfilePhoto,
} from './styles';

type Props = {
  title: string | undefined;
  photoUrl: string | undefined;
  handleLogOutModal: () => void;
};

export const ProfileHeader = ({
  title,
  photoUrl,
  handleLogOutModal,
}: Props) => {
  const { subtitleFont } = theme.fonts;
  const { buttonFeedBackWhite } = theme.colors;

  const defaultPhotoUrl =
    'https://images.unsplash.com/photo-1606385837831-6ea825323564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80';

  return (
    <Container>
      <TitleContent>
        <Title font={subtitleFont} size={20}>
          Hello, <Bold>{title || ''}</Bold>
        </Title>
        <Title font={subtitleFont} size={14}>
          What have you been up to ?
        </Title>
      </TitleContent>

      <Wrapper
        android_ripple={{
          color: buttonFeedBackWhite,
          borderless: true,
        }}
        onPress={handleLogOutModal}>
        <ProfilePhoto source={{ uri: photoUrl || defaultPhotoUrl }} />
      </Wrapper>
    </Container>
  );
};
