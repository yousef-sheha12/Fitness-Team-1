import { create } from 'zustand';

export const useFilterStore = create((set) => ({
  enabled: false,
  durationId: 1,
  specializationId: 0,

  setEnabled: (enabled) => set({ enabled }),
  setdurationIdr: (durationId) => set({ durationId }),
  setSpecializationId: (specializationId) => set({ specializationId }),
}));
