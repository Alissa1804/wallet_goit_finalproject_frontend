import { register, login, logout, fetchCurrentUser } from './auth-operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  
  isAuth: false,
    error:null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload: { user, token } }) => {
        state.token = token;
        state.user = user;
        state.isAuth = true;
      })
      .addCase(login.fulfilled, (state, { payload: { user, token } }) => {
        state.token = token;
        state.user = user;
        state.isAuth = true;
      })
      .addCase(logout.fulfilled, state => {
        state.token = null;
        state.user = { name: '', email: '' };
        state.isAuth = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isAuth = true;
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isFetchingCurrentUser = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.isAuth = false;
        state.error = payload;
        state.isFetchingCurrentUser = false;
      })
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          logout.pending,
          fetchCurrentUser.pending
        ),
        state => {
            state.isAuth = true;      }
      )
      .addMatcher(
        isAnyOf(
          register.fulfilled,
          login.fulfilled,
          fetchCurrentUser.fulfilled
        ),
        (state, { payload }) => {
          state.isAuth = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          logout.rejected,
          fetchCurrentUser.rejected
        ),
        (state, { payload }) => {
          state.isAuth = false;
          state.error = payload;
        }
      ),
});


export default authSlice.reducer;
