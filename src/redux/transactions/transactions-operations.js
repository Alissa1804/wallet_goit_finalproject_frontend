// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://walletproject.onrender.com';

// export const deleteTransaction = createAsyncThunk(
//   'transactions/deleteTransaction',
//   async (_id, { rejectWithValue }) => {
//     try {
//       await axios.delete(`/api/transactions/${_id}`);
//       toast.success('Your transaction is deleted!');
//       return _id;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  TransactionsAPI,
  TransactionCategoriesAPI,
  TransactionSummaryAPI,
} from '../../services/api';

export const fetchTransactions = createAsyncThunk(
  'transactions/getTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await TransactionsAPI.getUserTransactions();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransition',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await TransactionsAPI.createTransaction(formData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransition',
  async (formData, { rejectWithValue }) => {
    try {
      await TransactionsAPI.removeTransaction(formData.transitionId);
      const newBalance = formData.balance - formData.delAmount;
      const info = { id: formData.transitionId, balance: newBalance };
      return info;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



export const editTransaction = createAsyncThunk(
  'transactions/editTransition',
  async (formData, { rejectWithValue }) => {
    try {
      const info = {
        id: formData.id,
        amount: formData.amount,
        comment: formData.comment,
      };
      const response = await TransactionsAPI.updateTransaction(info);
      const newBalance = formData.balance - formData.oldAmnt + formData.amount;

      const data = {
        response,
        balance: newBalance,
      };

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionCategories = createAsyncThunk(
  'transactions/getTransactionCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response =
        await TransactionCategoriesAPI.getTransactionCategories();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionSummary = createAsyncThunk(
  'transactions/getTransactionSummary',
  async (formData, { rejectWithValue }) => {
    try {
      // return await TransactionSummaryAPI.getTransactionSummary(formData);
      const response = await TransactionSummaryAPI.getTransactionSummary(
        formData
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
