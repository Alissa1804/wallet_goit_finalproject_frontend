import { register} from './authOperations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
    user: { email: '', name: '' },
    token: null,
    isLoading: false,
    isLoggedIn: false,
    isRefreshingUser: false,
    error: null,
  };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder =>
      builder
        .addCase(register.fulfilled, (state, { payload: user, token }) => {
          state.isLoading = false;
          state.user = user;
          state.token = token;
          state.isLoggedIn = true;
          state.error = null
        })
        .addMatcher(
          isAnyOf(
            register.pending,
          ),
          state => {
            state.isLoading = true;
          }
        )
        .addMatcher(
          isAnyOf(
            register.rejected,
          ),
          (state, { payload }) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.error = payload;
          }
        ),
  });
  
  export default authSlice.reducer;

