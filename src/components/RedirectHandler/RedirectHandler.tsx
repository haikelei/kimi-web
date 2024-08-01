'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function RedirectHandler() {
  const router = useRouter();

  useEffect(() => {
    const handleRedirect = (event: CustomEvent<{ url: string }>) => {
      const { url } = event.detail;
      const loginPath = `/login?redirect=${encodeURIComponent(url)}`;
      router.push(loginPath);
    };

    window.addEventListener('redirectToLogin', handleRedirect as EventListener);

    return () => {
      window.removeEventListener(
        'redirectToLogin',
        handleRedirect as EventListener,
      );
    };
  }, [router]);

  return null; // 这个组件不渲染任何内容
}
