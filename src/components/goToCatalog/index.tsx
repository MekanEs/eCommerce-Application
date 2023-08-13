import React from 'react';

import styles from './goToCatalog.module.scss';
import { NavLink } from 'react-router-dom';

const GoToCatalog: React.FC = () => {
  return (
    <div className={styles.container}>
      <button className={styles.catalogBtn}>
        <NavLink to="catalog">go to catalog</NavLink>
      </button>
    </div>
  );
};

export default GoToCatalog;
