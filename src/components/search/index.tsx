import React from 'react';
import styles from './search.module.scss';

const Search: React.FC = () => {
  return (
    <div className={styles.container}>
      <input type="search" placeholder="Search..." />
    </div>
  );
};

export default Search;
