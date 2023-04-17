import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://walletproject.onrender.com';

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (_id, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/transactions/${_id}`);
      toast.success('Your transaction is deleted!');
      return _id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);



