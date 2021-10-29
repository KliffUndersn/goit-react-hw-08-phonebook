import React, { useEffect } from 'react';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './components/Navbar/Navbar';
import { userRefresh } from './redux/auth/authOperations';
import { useDispatch } from 'react-redux';

store.getState();

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userRefresh());
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </>
  );
}

export default App;
