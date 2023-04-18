import { createSlice } from '@reduxjs/toolkit';
import { getStatistics } from './finance-operations';

const initialState = {
  statistics: null,
  isLoading: false,
  error: null,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getStatistics.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getStatistics.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.statistics = payload;
      })
      .addCase(getStatistics.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.statistics = null;
      }),
});

export default financeSlice.reducer;
