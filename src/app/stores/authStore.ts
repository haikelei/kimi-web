import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ApiUser } from '@/types';

interface AuthState {
  user: ApiUser | null;
  isLoggedIn: boolean;
  token: string;
  updateUser: (userData: any) => void;
  logout: () => void;
  goLoginPage: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoggedIn: false,
      updateUser: (userData) => {
        set({ user: userData, isLoggedIn: true });
      },
      updateToken: (token) => {
        set({ token });
      },
      logout: () => {
        set({ user: null, token: '', isLoggedIn: false });
      },
      goLoginPage: () => {
        let loginPath = '/login';
        if (typeof window !== 'undefined') {
          const currentUrl = window.location.href;
          loginPath = `/login?redirect=${encodeURIComponent(currentUrl)}`;
        }
        // 注意：这里我们需要使用 Next.js 的 router，但 Zustand store 不能直接访问 router
        // 所以我们需要在组件中处理实际的导航
        return loginPath;
      },
    }),
    {
      name: 'auth-storage',
    },
  ),
);

export default useAuthStore;
