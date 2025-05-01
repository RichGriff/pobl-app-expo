import { create } from 'zustand';

interface StoreState {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (value) => set({ isLoggedIn: value }),
}));

export default useStore;