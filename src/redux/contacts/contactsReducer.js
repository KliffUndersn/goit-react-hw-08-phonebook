import {
  configureStore,
  createReducer,
  combineReducers,
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  getContactRequest,
  getContactSuccess,
  getContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  filterContact,
} from './contactsActions';

const initialStore = {
  filter: '',
  items: [],
};

const itemsReducer = createReducer(initialStore, {
  [getContactSuccess]: (_, { payload }) => {
    return { filter: '', items: payload };
  },
  [addContactSuccess]: (state, { payload }) => {
    return { filter: state.filter, items: [...state.items, payload] };
  },
  [removeContactSuccess]: (state, { payload }) => {
    return {
      filter: state.filter,
      items: state.items.filter(e => e.id !== payload),
    };
  },
  [filterContact]: (state, { payload }) => {
    return { filter: payload, items: [...state.items] };
  },
});

const contactsReducer = combineReducers({ items: itemsReducer });
export default contactsReducer;
