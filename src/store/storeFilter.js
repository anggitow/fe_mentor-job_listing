import { create } from "zustand";

export const useFilterStore = create((set) => ({
  filter: [],
  setFilter: (filter) => set({ filter }),
}));
