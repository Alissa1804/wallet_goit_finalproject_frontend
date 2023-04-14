import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  isTransactionModalOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState: initialState,
  reducers: {
    toggleModalOpen(state) {
      state.isModalOpen = !state.isModalOpen;
    },
    toggleTransactionModalOpen(state) {
      state.isTransactionModalOpen = !state.isTransactionModalOpen;
    },
  },
});

export const { toggleModalOpen, toggleTransactionModalOpen } =
  globalSlice.actions;
export const globalReducer = globalSlice.reducer;
