import React from 'react';

import styles from './goToCatalog.module.scss';
import { NavLink } from 'react-router-dom';

const GoToCatalog: React.FC = () => {
  return (
    <div className={styles.container}>
      <NavLink className={styles.catalogBtn} to="/catalog">
        go to catalog
      </NavLink>
    </div>
  );
};

export default GoToCatalog;
