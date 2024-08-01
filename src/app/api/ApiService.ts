import apiClient from './api';
import { any } from 'three/src/nodes/math/MathNode';

export const getLoginSmsApi = (phone: string): Promise<any> => {
  return apiClient.get('/sms/getLoginSms', {
    params: {
      phone,
    },
  });
};

export const loginBySmsApi = (phone: string, captcha: string) => {
  return apiClient.post('/auth/loginBySms', {
    phone,
    captcha,
  });
};

export const productPageApi = (current = 1, pageSize = 30) => {
  return apiClient.get('/product/page', {
    params: {
      current,
      pageSize,
    },
  });
};

export const productDetailApi = (id = null) => {
  return apiClient.get('/product/detail', {
    params: {
      flightInstanceId: id,
    },
  });
};

export const currentUserApi = () => {
  return apiClient.get('/user/currentUser');
};

export const passengerAddApi = (
  name = '',
  idType = 1,
  idNumber = '',
  phone = '',
) => {
  return apiClient.post('/passenger/add', {
    name,
    idType,
    idNumber,
    phone,
  });
};

export const passengerListApi = () => {
  return apiClient.get('/passenger/list', {
    autoRedirect: false,
  });
};

export const passengerDeleteApi = (id = null) => {
  return apiClient.post('/passenger/delete', {
    id,
  });
};

export const orderCreateApi = (flightInstanceId = '', passengerId = '') => {
  return apiClient.post('/order/create', {
    flightInstanceId,
    passengerId,
  });
};

export const payOrderApi = (orderNo = '') => {
  return apiClient.post('/pay/payOrder', {
    orderNo,
  });
};

export const queryOrderDetailApi = (orderNo = '') => {
  return apiClient.get('/order/detail', {
    params: {
      orderNo,
    },
  });
};

export const queryOrderOutSideApi = (orderNo = '') => {
  return apiClient.get('/order/queryOderOutside', {
    params: {
      orderNo,
    },
  });
};

export const queryOrderListApi = () => {
  return apiClient.get('/order/list');
};
