import create from 'zustand';

export const useSearchStore = create((set) => ({
  requestData: null,
  search: (updateProps) => set((state) => ({ ...state, updateProps }))
}));
