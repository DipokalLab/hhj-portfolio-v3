import { create } from "zustand";

export const usePageStore = create((set) => ({
  isFrontendOpenMore: false,
  setFrontendOpenMore: (open: boolean) =>
    set((state) => ({ isFrontendOpenMore: open })),
}));
