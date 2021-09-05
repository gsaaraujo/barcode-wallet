import React, { useEffect } from 'react';
import { Keyboard } from 'react-native';

import Orientation from 'react-native-orientation';

import { useForm, Controller } from 'react-hook-form';

import { theme } from '../../global/styles/theme';

import AmountSvg from '../../assets/images/amount.svg';
import BarcodeSvg from '../../assets/images/barcode.svg';
import FileTextSvg from '../../assets/images/file-text-line.svg';
import XCircleSvg from '../../assets/images/x-circle.svg';

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

export const AddPaymentSlip = () => {
  const { buttonFeedBack, placeholder } = theme.colors;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

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
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputContent>
              <XCircleSvg />
              <Input
                placeholder='Due date'
                placeholderTextColor={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
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
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputContent>
              <AmountSvg />
              <Input
                placeholder='Amount'
                placeholderTextColor={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </InputContent>
          )}
          name='amount'
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
              />
            </InputContent>
          )}
          name='barcode'
          defaultValue=''
        />
        {errors.barcode && <ErrorMessage>This is required.</ErrorMessage>}
      </Content>

      <Button
        android_ripple={{ color: buttonFeedBack }}
        onPress={handleSubmit(onSubmit)}>
        <Title size={16}>Register</Title>
      </Button>
    </Container>
  );
};
