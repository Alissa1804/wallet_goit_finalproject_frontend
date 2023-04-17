import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTransactionCategories, addTransaction } from './trans-operations';

export const getTransactionCategoriesThunk = createAsyncThunk(
  'transactions/getTransactionCategories',
  getTransactionCategories
);

const initialState = {
  categories: [],
  editTransaction: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setEditTransaction: (state, { payload }) => {\n      state.editTransaction = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        getTransactionCategoriesThunk.fulfilled,
        (state, { payload }) => {
          state.categories = payload;
        }
      )
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.categories = [...state.categories, payload.data];
        state.editTransaction = null;
      });
  },
});

export const { setEditTransaction } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
