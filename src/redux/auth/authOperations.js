import axios from 'axios';
import {
  fetchPostLogin,
  fetchPostLogout,
  fetchGetCurrent,
  fetchPostSignup,
} from '../../shared/services/api';
import {
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterError,
  userLoginRequest,
  userLoginSuccess,
  userLoginError,
  userLogOutRequest,
  userLogOutSuccess,
  userLogOutError,
  userRefreshRequest,
  userRefreshSuccess,
  userRefreshError,
} from './authActions';

export const userRegister = userData => dispatch => {
  dispatch(userRegisterRequest());

  fetchPostSignup(userData)
    .then(data => dispatch(userRegisterSuccess(data)))
    .catch(err => dispatch(userRegisterError(err.message)));
};

export const userLogin = userData => dispatch => {
  dispatch(userLoginRequest());

  fetchPostLogin(userData)
    .then(data => dispatch(userLoginSuccess(data)))
    .catch(err => dispatch(userLoginError(err.message)));
};

export const userLogOut = () => (dispatch, getState) => {
  dispatch(userLogOutRequest());

  const {
    auth: {
      user: { token },
    },
  } = getState();

  fetchPostLogout(token)
    .then(() => dispatch(userLogOutSuccess()))
    .catch(err => dispatch(userLogOutError(err.message)));
};

export const userRefresh = () => (dispatch, getState) => {
  dispatch(userRefreshRequest());

  const {
    auth: {
      user: { token },
    },
  } = getState();
  fetchGetCurrent(token)
    .then(data => dispatch(userRefreshSuccess(data)))
    .catch(err => dispatch(userRefreshError(err.message)));
};
