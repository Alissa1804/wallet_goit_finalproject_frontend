import { createSlice } from '@reduxjs/toolkit';
//import { getStatistics } from './finance-operations';

const initialState = {
  statistics: [],
  isLoading: false,
  error: null,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: builder => builder,
});

export default financeSlice.reducer;
