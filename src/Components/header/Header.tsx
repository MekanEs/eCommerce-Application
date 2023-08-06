import React from 'react';
import styles from './Header.module.scss';
import { isActive } from '../../utils';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        <li>
          <button>
            <NavLink className={isActive} to="/">
              Main
            </NavLink>
          </button>
        </li>
        <li>
          <button>
            <NavLink className={isActive} to="about">
              About
            </NavLink>
          </button>
        </li>
        <li>
          <button>
            <NavLink className={isActive} to="registration">
              Registartion
            </NavLink>
          </button>
        </li>
        <li>
          <button>
            <NavLink className={isActive} to="login">
              Login
            </NavLink>
          </button>
        </li>
      </ul>
    </header>
  );
};
export default Header;
