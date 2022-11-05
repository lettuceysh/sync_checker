import create from 'zustand';

const initialState = {
  ids: []
};

export const useOperationStore = create((set) => ({
  ...initialState,
  addId: (id) => set((state) => ({ ...state, ids: [...state.ids, id] })),
  deleteId: (id) =>
    set((state) => ({ ...state, ids: state.ids.filter((savedId) => savedId != id) })),
  setIds: (ids) => set((state) => ({ ...state, ids }))
}));
