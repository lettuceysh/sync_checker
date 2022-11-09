import create from 'zustand';

const initialState = {
  selectedJob: null
};

export const useMainStore = create((set) => ({
  ...initialState,
  setSelectedJob: (selectedJob) => set((state) => ({ ...state, selectedJob }))
}));
