import { nanoid } from 'nanoid';

export const items = [
  {
    id: nanoid(),
    to: '/',
    text: 'HomePage',
  },
  {
    id: nanoid(),
    to: '/register',
    text: 'Register page',
  },
  {
    id: nanoid(),
    to: '/contacts',
    text: 'Phonebook Page',
  },
];
