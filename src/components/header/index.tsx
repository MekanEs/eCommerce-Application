import React from 'react';
import styles from './header.module.scss';
import Navigation from './nav';
import logo from '../../assets/img/svg/veros_logo.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { isActive } from '../../utils';
import { userAuth } from '../../hooks/user-auth';
import Logout from '../logout';

const Header: React.FC = () => {
  const path = useLocation().pathname;
  const isAuth = userAuth();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>

        {path === '/registration' || path === '/login' ? (
          ''
        ) : isAuth ? (
          <Logout />
        ) : (
          <div className={styles.auth}>
            <NavLink className={isActive} to="registration">
              registration
            </NavLink>
            <NavLink className={isActive} to="login">
              log in
            </NavLink>{' '}
          </div>
        )}
      </header>
      <Navigation />
    </div>
  );
};
export default Header;
