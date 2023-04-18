import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://walletproject.onrender.com';

export const getCategories = createAsyncThunk(
  'categories/getAllCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/categories/');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
