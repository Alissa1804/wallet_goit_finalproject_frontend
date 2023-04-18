import axios from 'axios';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-slice';
import { globalReducer } from './global/global-slice';
import financeReducer from './finance/finance-slice';
import categoriesReducer from './categories/categories-slice';
import transactionsReducer from './transactions/transactions-slice';
import userReducer from './user/user-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  global: globalReducer,
  finance: financeReducer,
  categories: categoriesReducer,
  transactions: transactionsReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store, null, () => {
  axios.defaults.headers.common.Authorization = `Bearer ${
    store.getState().auth.token
  }`;
});
