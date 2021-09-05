import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Keyboard } from 'react-native';

import Orientation from 'react-native-orientation';
import { useNavigation } from '@react-navigation/native';

import { useForm, Controller } from 'react-hook-form';

import { theme } from '../../global/styles/theme';

import AmountSvg from '../../assets/images/amount.svg';
import BarcodeSvg from '../../assets/images/barcode.svg';
import FileTextSvg from '../../assets/images/file-text-line.svg';
import XCircleSvg from '../../assets/images/x-circle.svg';

import { useUser } from '../../hooks/useUser';

import { Spacer } from '../../components/Spacer';

import {
  Container,
  Content,
  Title,
  Button,
  Input,
  ErrorMessage,
  InputContent,
} from './styles';

export const AddPaymentSlip = ({ route }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const { primaryDark, buttonFeedBack, placeholder } = theme.colors;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { handleAddPaymentSlipt } = useUser();
  const navigation: any = useNavigation();

  const code = route.params.codebar;

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    data.value = Number(data.value);

    await handleAddPaymentSlipt(data);
    setIsLoading(false);

    navigation.navigate('Home');
  };

  return (
    <Container onPress={() => Keyboard.dismiss()}>
      <Content>
        <Spacer height={20} />
        <Title size={15}>Fill the data</Title>
        <Spacer height={49} />

        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 50,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputContent>
              <FileTextSvg />
              <Input
                placeholder='Name'
                placeholderTextColor={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                multiline
              />
            </InputContent>
          )}
          name='name'
          defaultValue=''
        />
        {errors.name && <ErrorMessage>This is required.</ErrorMessage>}

        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 8,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputContent>
              <XCircleSvg />
              <Input
                placeholder='Due date'
                placeholderTextColor={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                keyboardType='numeric'
                value={value}
              />
            </InputContent>
          )}
          name='dueDate'
          defaultValue=''
        />
        {errors.dueDate && <ErrorMessage>This is required.</ErrorMessage>}

        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 10,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputContent>
              <AmountSvg />
              <Input
                placeholder='Value'
                placeholderTextColor={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                keyboardType='numeric'
                value={value}
              />
            </InputContent>
          )}
          name='value'
          defaultValue=''
        />
        {errors.amount && <ErrorMessage>This is required.</ErrorMessage>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputContent>
              <BarcodeSvg />
              <Input
                placeholder='Barcode'
                placeholderTextColor={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType='numeric'
                style={{ paddingRight: 20 }}
              />
            </InputContent>
          )}
          name='barcode'
          defaultValue={code || ''}
        />
        {errors.barcode && <ErrorMessage>This is required.</ErrorMessage>}
      </Content>

      <Button
        android_ripple={{ color: buttonFeedBack }}
        disabled={isLoading}
        onPress={handleSubmit(onSubmit)}>
        {isLoading ? (
          <ActivityIndicator size='large' color={primaryDark} />
        ) : (
          <Title size={16}>Register</Title>
        )}
      </Button>
    </Container>
  );
};
