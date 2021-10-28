import { Switch, Route } from 'react-router-dom';
import { ContactList } from './components/InputForm/ContactList/ContactList';
import InputForm from './components/InputForm/inputForm/InputForm';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LoginForm />
      </Route>
      <Route exact path="/register">
        <RegisterForm />
      </Route>
      <Route exact path="/contacts">
        <InputForm />
        <ContactList />
      </Route>
    </Switch>
  );
};

export default Routes;
