import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  officer: {
    name: "Insp. V. Kumar",
    role: "OFFICER_KSP_NAME",
    avatar: null,
  },
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
}));
