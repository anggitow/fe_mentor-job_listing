import { create } from "zustand";

export const useFilterStore = create((set) => ({
  filter: ["Frontend", "CSS", "JavaScript", "Python", "HTML"],
  setFilter: (filter) => set({ filter }),
}));
