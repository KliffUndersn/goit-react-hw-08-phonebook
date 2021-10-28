import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/auth/authOperations';
import { fields } from './fields';
import { initialState } from './initialState';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();

  const handleUserAuth = dataUser => {
    dispatch(userLogin(dataUser));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleUserAuth(data);
    setData({ ...initialState });
  };

  return (
    <>
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
