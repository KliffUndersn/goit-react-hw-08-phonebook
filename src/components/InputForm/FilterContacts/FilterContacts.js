import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../../redux/contacts/contactsActions';

export const FilterContacts = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        name="filter"
        placeholder="start typing"
        onChange={({ target }) => dispatch(filterContact(target.value))}
      />
    </>
  );
};
