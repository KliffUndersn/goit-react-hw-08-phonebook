import { nanoid } from 'nanoid';

export const publicItem = [
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
];
export const privateItems = [
  {
    id: nanoid(),
    to: '/contacts',
    text: 'Phonebook Page',
  },
];
