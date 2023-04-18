
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://walletproject.onrender.com';

export const getTransactionCategories = createAsyncThunk(
  'categories/getAllCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/categories/');
      toast.success('You have all categories!');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data); // return a rejected promise with error response data
    }
  }
); console.log(70)

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (data, { rejectWithValue }) => {
    try {
        const transaction = await axios.addTransaction(data);
        toast.success('You have ADD!');
      return transaction;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
); console.log(748);


