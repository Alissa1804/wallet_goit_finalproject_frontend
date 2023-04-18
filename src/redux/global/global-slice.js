import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  isTransactionModalOpen: false,
  isEditTransactionModalOpen: false,
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
    toggleEditTransactionModalOpen(state) {
      state.isEditTransactionModalOpen = !state.isEditTransactionModalOpen;
    },
    setModalType(state, action) {
      state.modalType = action.payload;
    },
  },
});

export const {
  toggleModalOpen,
  toggleTransactionModalOpen,
  setModalType,
  toggleEditTransactionModalOpen,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
