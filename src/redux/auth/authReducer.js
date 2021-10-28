import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  userLoginSuccess,
  userLogOutSuccess,
  userRefreshError,
  userRefreshSuccess,
  userRegisterSuccess,
} from './authActions';

const iS = {
  token: null,
  user: {
    email: '',
    name: '',
  },
};

const userReducer = createReducer(iS, {
  [userRegisterSuccess]: (_, { payload }) => payload,
  [userLoginSuccess]: (_, { payload }) => payload,
  [userLogOutSuccess]: () => iS,
  [userRefreshSuccess]: (state, { payload }) => ({ ...state, user: payload }),
  [userRefreshError]: () => iS,
});

const isAuthReducer = createReducer(false, {
  [userRegisterSuccess]: () => true,
  [userLoginSuccess]: () => true,
  [userLogOutSuccess]: () => false,
  [userRefreshSuccess]: () => true,
  [userRefreshError]: () => false,
});

const userPersistConfig = {
  key: 'token',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const authReducer = combineReducers({
  user: persistedUserReducer,
  isAuth: isAuthReducer,
});

export default authReducer;
