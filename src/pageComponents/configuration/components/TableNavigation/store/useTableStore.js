import create from 'zustand';

const initialState = {
  sourceList: null,
  targetList: null
};

export const useTable = create((set) => ({
  ...initialState,
  setSourceList: (sourceList) => set((state) => ({ ...state, sourceList })),
  setTargetList: (targetList) => set((state) => ({ ...state, targetList })),
  clearTable: () => set(initialState)
}));
