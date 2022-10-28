import create from 'zustand';

export const useAlertStore = create((set) => ({
  props: {
    title: '',
    content: '',
    okText: '',
    closeText: '',
    onOk: null,
    onClose: null,
    open: false
  },
  alert: (updateProps) => set((state) => ({ props: { ...updateProps, open: true } })),
  close: () => set({ props: { open: false } })
}));
