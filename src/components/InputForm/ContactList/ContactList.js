import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../../redux/contacts/contactsOperations';

export const ContactList = () => {
  const items = useSelector(state => state.contacts.items.items);
  const filter = useSelector(state => state.contacts.items.filter);

  const filterContacts = e => {
    return items.filter(e => e.name.toLowerCase().includes(filter));
  };
  const dispatch = useDispatch();
  return (
    <>
      {filterContacts && (
        <>
          <h3>Contacts</h3>
          <ul>
            {filterContacts().map(e => (
              <li key={e.id}>
                {e.name} : {e.number}
                <button onClick={() => dispatch(removeContact(e.id))}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
