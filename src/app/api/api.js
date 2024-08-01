import axios from 'axios';
import useAuthStore from '@/app/stores/authStore';

// 添加在文件顶部
class UnauthorizedError extends Error {
  constructor(message = '用户未登录') {
    super(message);
    this.name = 'UnauthorizedError';
  }
}

// 创建一个自定义事件来处理重定向
const createRedirectEvent = (url) =>
  new CustomEvent('redirectToLogin', { detail: { url } });

// 创建一个 Axios 实例
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
  timeout: 10 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    // 在这里可以添加一些通用的请求逻辑，例如添加 token
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    // 在这里处理外层的数据结构，例如只返回 data 部分
    if (response.data.success) {
      return Promise.resolve(response.data.data);
    } else if (
      response?.data?.errorCode === 10005 ||
      response?.data?.errorCode === 10002
    ) {
      if (
        typeof window !== 'undefined' &&
        response.config.autoRedirect !== false
      ) {
        const currentUrl = window.location.href;
        window.dispatchEvent(createRedirectEvent(currentUrl));
      }
      return Promise.reject(new UnauthorizedError());
    } else {
      // 可以根据不同的错误码进行处理
      const errorCode = response.data.errorCode;
      const errorMessage = response.data.errorMessage;
      const error = new Error(errorMessage);
      error.errorCode = errorCode;
      // 可以根据错误码进行不同的处理
      return Promise.reject(error);
    }
  },
  (error) => {
    // 在这里统一处理错误，例如显示错误提示
    console.error('API Error:', error);
    return Promise.reject(error);
  },
);

export default apiClient;
