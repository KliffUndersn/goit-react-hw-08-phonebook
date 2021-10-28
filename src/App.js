import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './components/Navbar/Navbar';

store.getState();

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </Provider>
    </>
  );
}

export default App;
