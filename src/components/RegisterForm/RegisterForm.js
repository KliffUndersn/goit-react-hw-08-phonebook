import { useState } from 'react';

import { fields } from './fields';
import { initialState } from './initialState';

import styles from './RegisterForm.module.css';

const RegisterForm = ({ onSubmit }) => {
  const [data, setData] = useState(initialState);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(data);
    setData({ ...initialState });
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <input {...fields.email} value={data.email} onChange={handleChange} />
        </div>
        <div>
          <input
            {...fields.password}
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
