import React from 'react';
import { isActive } from '../../../utils';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './navigation.module.scss';

const Navigation: React.FC = () => {
  const path = useLocation().pathname;
  const NavStyle = path !== '/' ? styles.center : styles.nav;
  return (
    <ul className={NavStyle}>
      <li>
        <NavLink className={isActive} to="/">
          Main
        </NavLink>
      </li>

      <li>
        <NavLink className={isActive} to="catalog">
          Catalog
        </NavLink>
      </li>

      <li>
        <NavLink className={isActive} to="about">
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
