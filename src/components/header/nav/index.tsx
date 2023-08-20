import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './navigation.module.scss';
import styles2 from '../header.module.scss';

const Navigation: React.FC = () => {
  const path = useLocation().pathname;
  const NavStyle = path !== '/' ? styles.center : styles.nav;
  return (
    <ul className={NavStyle}>
      <li>
        <NavLink
          className={(el): string =>
            el.isActive ? styles2.activeLink : styles2.link
          }
          to="/"
        >
          Main
        </NavLink>
      </li>

      <li>
        <NavLink
          className={(el): string =>
            el.isActive ? styles2.activeLink : styles2.link
          }
          to="catalog"
        >
          Catalog
        </NavLink>
      </li>

      <li>
        <NavLink
          className={(el): string =>
            el.isActive ? styles2.activeLink : styles2.link
          }
          to="about"
        >
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
