import { createSlice } from '@reduxjs/toolkit';
import { deleteTransaction, addTransaction, getTransactions } from './transactions-operations';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: { transactions: [], balance: 0, isLoading: false, error: null },
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(deleteTransaction.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.transactions = state.transactions.filter(({ _id }) => _id !== payload);
        state.balance = payload.balance;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addTransaction.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getTransactions.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTransactions.fulfilled, (state, { payload }) => {
        state.transactions = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getTransactions.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
})

export default transactionsSlice.reducer;
