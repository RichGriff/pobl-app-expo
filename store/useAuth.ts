import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  accountId: string, 
  contactId: string, 
  email: string, 
  fullname: string, 
  id: string
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null,
  // setIsLoggedIn: (value: boolean) => void;
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,

      login: async (email: string, password: string) => {
        try {
          const response = await fetch('https://api-staging.poblgroup.co.uk/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });

          if (!response.ok) throw new Error('Login failed');

          const { data } = await response.json();

          set({ user: data, isLoggedIn: true });

        } catch (error) {
          console.error('Login error:', error);
          throw error;
        }
      },

      logout: async () => {
        set({ user: null, isLoggedIn: false });
      }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);

export default useAuth;
