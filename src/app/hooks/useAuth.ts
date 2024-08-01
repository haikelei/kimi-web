import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ApiUser } from '@/types';

const useAuth = () => {
  const [user, setUser] = useState<ApiUser>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const checkAuthStatus = useCallback(() => {
    const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem('user') || 'null');
    console.log('checkAuthStatus==', token, userData);
    if (token && userData) {
      setUser(userData);
      setIsLoggedIn(true);
    } else {
      setUser(null);
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    checkAuthStatus();

    // 添加事件监听器来检测 localStorage 变化
    window.addEventListener('storage', checkAuthStatus);
    return () => {
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, [checkAuthStatus]);

  const updateUser = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsLoggedIn(true);
  };

  const goLoginPage = () => {
    let loginPath = '/login';
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      loginPath = `/login?redirect=${encodeURIComponent(currentUrl)}`;
    }
    router.push(loginPath);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsLoggedIn(false);
  };

  return { user, isLoggedIn, goLoginPage, updateUser, logout };
};

export default useAuth;
