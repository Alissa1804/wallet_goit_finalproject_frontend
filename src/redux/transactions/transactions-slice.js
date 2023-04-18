import { createSlice } from '@reduxjs/toolkit';
import { deleteTransaction } from './transactions-operations';

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
        state.transactions = state.transactions.filter(
          ({ _id }) => _id !== payload.id
        );
        state.balance = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export default transactionsSlice.reducer;
