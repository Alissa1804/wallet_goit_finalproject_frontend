import axios from 'axios';
//import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://walletproject.onrender.com';

export const getStatistics = createAsyncThunk(
  'finance/getStatistics',
  async ({ year, month }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/statistics', {
        data: { year, month },
      });
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
