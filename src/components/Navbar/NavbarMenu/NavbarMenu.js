import { NavLink } from 'react-router-dom';

import styles from './NavbarMenu.module.css';

import { publicItem, privateItems } from './items';
import { useSelector } from 'react-redux';

const NavbarMenu = () => {
  const isLoggedIn = useSelector(state => state.auth.isAuth);
  const arr = isLoggedIn ? privateItems : publicItem;
  const menuElements = arr.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink
        exact
        activeClassName={styles.activeLink}
        className={styles.link}
        to={to}
      >
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={styles.menu}>{menuElements}</ul>;
};

export default NavbarMenu;
