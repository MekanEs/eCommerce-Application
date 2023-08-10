import React from 'react';
import styles from './header.module.scss';
import Navigation from './nav';
import logo from '../../assets/veros_logo.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { isActive } from '../../utils';
const Header: React.FC = () => {
  const path = useLocation().pathname;
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>

        <div className={styles.auth}>
          <NavLink className={isActive} to="registration">
            <button>registration</button>
          </NavLink>

          <NavLink className={isActive} to="login">
            <button>login</button>
          </NavLink>
        </div>
      </header>
      {path === '/' ? <Navigation /> : ''}
    </div>
  );
};
export default Header;
