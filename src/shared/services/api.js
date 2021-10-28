import axios from 'axios';
import store from '../../redux/store';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const fetchAllContacts = async () => {
  const { data } = await instance.get('/contacts');
  console.log(data);
  return data;
};

export const fetchAddContact = async contact => {
  const { data } = await instance.post('/contacts', contact);
  return data;
};

export const fetchRemoveContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
export const fetchGetCurrent = async () => {
  const { data } = await instance.get('/users/current');
  const state = store.getState();
  token.set(state.auth.user.token);
  return data;
};

export const fetchPostSignup = async user => {
  const { data } = await instance.post('/users/signup', user);
  token.set(data.token);
  return data;
};
export const fetchPostLogin = async user => {
  const { data } = await instance.post('/users/login', user);
  token.set(data.token);
  return data;
};
export const fetchPostLogout = async user => {
  const { data } = await instance.post('/users/logout', user);
  token.unset();
  return data;
};

export default {
  fetchAllContacts,
  fetchAddContact,
  fetchRemoveContact,
  fetchGetCurrent,
  fetchPostSignup,
  fetchPostLogin,
  fetchPostLogout,
};
