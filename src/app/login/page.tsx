'use client';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import VerificationCodeInput from '@/app/login/components/VerificationCodeInput';
import { currentUserApi, loginBySmsApi } from '@/app/api/ApiService';
import useHandleApiError from '@/app/hooks/useHandleApiError';
import { useRouter, useSearchParams } from 'next/navigation';
import useAuthStore from '@/app/stores/authStore';

export default function Page() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPhoneNumber(event.target.value);
  };
  const [smsCode, setSmsCode] = useState('');
  const onGetSmsCode = (code) => {
    setSmsCode(code);
  };

  const toast = useToast();
  const handleApiError = useHandleApiError();
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get('redirect'); // 获取重定向参数
  const { updateUser, updateToken } = useAuthStore();
  const onClickLogin = () => {
    loginBySmsApi(phoneNumber, smsCode)
      .then(async (data: any) => {
        const token = data.token;
        updateToken(token);
        const userData = await currentUserApi();
        console.log('userData==>', userData);
        updateUser(userData);
        toast({
          title: '登录成功',
          description: '正在为您重定向到目标页面',
          status: 'success',
          duration: 2000,
          position: 'top',
          isClosable: false,
        });
        if (redirect) {
          router.push(redirect); // 跳转到重定向的页面
        } else {
          router.push('/');
        }
      })
      .catch((err) => {
        handleApiError(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-accent">
      <Container maxW="md" className="p-8 bg-white rounded-lg shadow-2xl">
        <Stack spacing="6">
          <div className="text-center">
            <Heading size="xl" className="text-primary mb-2">
              升舱
            </Heading>
            <Text className="text-gray-600">高端商务舱体验，从这里开始</Text>
          </div>
          <Stack spacing="4">
            <Input
              placeholder="输入手机号"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              autoComplete="tel"
              className="border-2 border-gray-300 focus:border-primary"
            />
            <VerificationCodeInput
              phoneNumber={phoneNumber}
              onGetSmsCode={onGetSmsCode}
            />
          </Stack>
          <Checkbox defaultChecked className="text-gray-600">
            记住我
          </Checkbox>
          <Button
            onClick={onClickLogin}
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            登录 / 注册
          </Button>
        </Stack>
      </Container>
    </div>
  );
}
