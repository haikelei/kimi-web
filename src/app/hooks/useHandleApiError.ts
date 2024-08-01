import { useToast } from '@chakra-ui/react';

const useHandleApiError = () => {
  const toast = useToast();

  return (error) => {
    console.error('errpr==', error);
    toast({
      // title: '网络错误',
      description: error.message,
      status: 'error',
      duration: 2000,
      position: 'top',
      isClosable: false,
    });
  };
};

export default useHandleApiError;
