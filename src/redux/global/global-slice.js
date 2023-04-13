import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState: initialState,
  reducers: {
    toggleModalOpen(state) {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { toggleModalOpen } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
