import axios from 'axios';
//import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://walletproject.onrender.com';

export const getStatistics = createAsyncThunk(
  'finance/getStatistics',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/statistics/?month=${date.moth}&year=${date.year}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
