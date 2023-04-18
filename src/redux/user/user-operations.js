import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://walletproject.onrender.com';

export const getCurrentUser = createAsyncThunk(
  'user/getCurrentUser',
  async ({ token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/users/current/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
