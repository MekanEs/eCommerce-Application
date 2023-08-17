import React, { useState } from 'react';
import styles from './header.module.scss';
import Navigation from './nav';
import logo from '../../assets/img/svg/veros_logo.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { isActive } from '../../utils';
import { userAuth } from '../../hooks/user-auth';
const Header: React.FC = () => {
  const path = useLocation().pathname;
  const [isAuth] = useState<boolean>(userAuth());
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        {path === '/registration' || path === '/login' ? (
          ''
        ) : isAuth ? (
          <button>Logout</button>
        ) : (
          <div className={styles.auth}>
            <button>
              <NavLink className={isActive} to="registration">
                registration
              </NavLink>
            </button>

            <button>
              <NavLink className={isActive} to="login">
                log in
              </NavLink>
            </button>
          </div>
        )}
      </header>
      <Navigation />
    </div>
  );
};
export default Header;
