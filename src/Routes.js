import { Switch } from 'react-router-dom';
import { ContactList } from './components/InputForm/ContactList/ContactList';
import InputForm from './components/InputForm/inputForm/InputForm';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import PrivateRoute from './components/PrivateRoutes';
import PublicRoute from './components/PublicRoutes';
import { FilterContacts } from './components/InputForm/FilterContacts/FilterContacts';

const Routes = () => {
  return (
    <Switch>
      <PublicRoute restricted exact path="/" redirectTo="/contacts">
        <LoginForm />
      </PublicRoute>
      <PublicRoute restricted exact path="/register" redirectTo="/contacts">
        <RegisterForm />
      </PublicRoute>
      <PrivateRoute exact path="/contacts" redirectTo="/">
        <InputForm />
        <FilterContacts />
        <ContactList />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
