import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  isTransactionModalOpen: false,
  modalType: null,
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
    setModalType(state, action) {
      state.modalType = action.payload;
    },
  },
});

export const { toggleModalOpen, toggleTransactionModalOpen, setModalType } =
  globalSlice.actions;
export const globalReducer = globalSlice.reducer;
