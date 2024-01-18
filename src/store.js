import { create } from 'zustand';

const useMemoStore = create((set) => ({
    memos: [],
    addMemo: (memo) => set(({ memos }) => ({ memos: [...memos, memo] })),
    updateMemo: (id, updatedMemo) =>
        set(({ memos }) => ({
            memos: memos.map((memo) =>
                memo.id === id ? { ...memo, ...updatedMemo } : memo
            ),
        })),
    deleteMemo: (id) =>
        set(({ memos }) => ({
            memos: memos.filter((memo) => memo.id !== id),
        })),
}));
export default useMemoStore;
