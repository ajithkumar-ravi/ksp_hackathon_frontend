import { create } from "zustand";

export const useUIStore = create((set) => ({
  sidebarCollapsed: false,
  activeCaseId: "KSP-2024-C00482",
  toggleSidebar: () =>
    set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
}));
