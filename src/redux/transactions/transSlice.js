import { createSlice } from '@reduxjs/toolkit';

import {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  editTransaction,
  getTransactionCategories,
  getTransactionSummary,
} from './trans-operations';

import { login, logout, fetchCurrentUser } from 'redux/auth/auth-operations';

const initialState = {
  transactionsData: [],
  isDeleting: false,
  categories: [],
  summary: null,
  balance: 0,
  editTransaction: null,
};

const transactionsSlice = createSlice({
  name: 'transition',
  initialState,
  reducers: {
    setEditTransaction(state, { payload }) {
      state.editTransaction = payload;
    },
  },
  extraReducers: builder => {
    builder
      // -------- fetchTransactions ---------
      .addCase(fetchTransactions.fulfilled, (state, { payload }) => {
        state.transactions = payload;
      })

      // ------- addTransaction -------
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.transactions = [payload, ...state.transactions];
        state.balance = payload.balanceAfter;
      })

      // -------- deleteTransaction --------
      .addCase(deleteTransaction.pending, state => {
        state.isDeleting = true;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.transactions = state.transactions.filter(
          t => t.id !== payload.id
        );
        state.balance = payload.balance;
        state.isDeleting = false;
      })
      .addCase(deleteTransaction.rejected, state => {
        state.isDeleting = false;
      })

      // --- editTransaction ---
      .addCase(editTransaction.fulfilled, (state, { payload }) => {
        state.transactions = state.transactions.map(t =>
          t.id === payload.response.id ? payload.response : t
        );
        state.balance = payload.balance;
      })

      // --- getTransactionCategories ---
      .addCase(getTransactionCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })

      // --- getTransactionSummary ---
      .addCase(getTransactionSummary.fulfilled, (state, { payload }) => {
        state.summary = payload;
      })
      // --- logOutRequest ---
      .addCase(logout.fulfilled, () => ({ ...initialState }))
      // --- loginRequest ---
      .addCase(login.fulfilled, (state, { payload }) => {
        state.balance = payload.balance;
      })
      // --- getUserInfoRequest ---
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.balance = payload.balance;
      });
  },
});
export const { setEditTransaction } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
