import NavbarMenu from './NavbarMenu/NavbarMenu';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className={styles.row}>
          <NavbarMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
