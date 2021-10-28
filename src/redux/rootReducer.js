import { combineReducers } from 'redux';

import contactsReducer from '../redux/contacts/contactsReducer';
import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
});

export default rootReducer;
