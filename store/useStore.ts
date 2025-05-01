// import { create } from 'zustand';

// interface StoreState {
//   isLoggedIn: boolean;
//   setIsLoggedIn: (value: boolean) => void;
// }

// const useStore = create<StoreState>((set) => ({
//   isLoggedIn: false,
//   setIsLoggedIn: (value) => set({ isLoggedIn: value }),
// }));

// export default useStore;

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface StoreState {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (value) => set({ isLoggedIn: value }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);

export default useStore;
