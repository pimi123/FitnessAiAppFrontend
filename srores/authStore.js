import { create } from "zustand";
import { api } from "../services/api";

export const userAuthStore = create((set) => ({
  user: null,
  isLogedin: false,
  isLoading: false,
  error: null,

  setIsLogedin: (isLogedin) => set({ isLogedin }),

  login: async (email, password) => {
    set({ isLoading: true, error: null });

    try {
      const data = await api.login(email, password);

      set({ user: data.user, isLoading: false });
      router.replace("/");
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  register: async (email, password) => {
    set({ isLoading: true, error: null });

    try {
      const data = await api.register(email, password);

      set({ user: data.user, isLoading: false });
      router.replace("/");
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  logout: async () => {
    set({ user: null });
    router.replace("/auth/login");
  },
}));
