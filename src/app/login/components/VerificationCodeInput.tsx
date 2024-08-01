import React, { useState, useEffect } from 'react';
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { getLoginSmsApi } from '@/app/api/ApiService';

export default function VerificationCodeInput({
  phoneNumber,
  onGetSmsCode,
}: {
  phoneNumber: string;
  onGetSmsCode: (code: string) => void;
}) {
  const [countdown, setCountdown] = useState(0);
  const [captcha, setCaptcha] = useState('');

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleGetCode = () => {
    getLoginSmsApi(phoneNumber)
      .then((res) => {
        console.log(res);
        setCountdown(60);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeCaptcha = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCaptcha(event.target.value);
    onGetSmsCode(event.target.value);
  };

  return (
    <InputGroup>
      <Input
        placeholder="验证码"
        value={captcha}
        onChange={onChangeCaptcha}
        className="border-2 border-gray-300 focus:border-primary"
      />
      <InputRightElement width="auto">
        <Button
          onClick={handleGetCode}
          isDisabled={countdown > 0}
          className={`${
            countdown > 0
              ? 'bg-gray-300 text-gray-600'
              : 'bg-secondary hover:bg-secondary-dark text-white'
          } px-3 py-1 rounded transition duration-300`}
        >
          {countdown > 0 ? `${countdown}s` : '获取验证码'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
