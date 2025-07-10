import { create } from "zustand";

interface CountStore {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    getCount: () => number;
}
const useCountStore = create<CountStore>((set, get) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set((state) => ({count: 0 })),
    getCount: () => get().count,
}));

export default useCountStore;