import { useEffect, useState } from 'react';
import { v4 as generate } from 'uuid';
import { useSelector } from 'react-redux';
import {
  addContact,
  getContact,
} from '../../../redux/contacts/contactsOperations';
import fields from './fields';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../../../redux/auth/authOperations';

const InputForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items.items);
  const username = useSelector(state => state.auth.user.user.name);
  const [state, setState] = useState({
    name: '',
    number: '',
  });
  useEffect(() => {
    dispatch(getContact());
  }, []);
  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = state;

    const newName = items.map(e => e.name);
    if (newName.includes(e.target.name.value)) {
      return alert(`${e.target.name.value} says hello from chat`);
    }
    const singleContact = {
      name,
      number,
    };
    dispatch(addContact(singleContact));
  };
  const logout = () => {
    dispatch(userLogOut());
  };
  return (
    <div>
      <button type="button" onClick={logout}>
        Logout
      </button>
      <div>Greetings {username}</div>
      <form onSubmit={handleSubmit}>
        <h1>Phonebook</h1>
        <h2>Name</h2>
        <input {...fields.name} onChange={handleChange} />
        <h2>Number</h2>
        <input {...fields.number} onChange={handleChange} />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default InputForm;
