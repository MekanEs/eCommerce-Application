import React from 'react';
import styles from './account.module.scss';

const Account: React.FC = (): React.JSX.Element => {
  return (
    <div className={styles.container}>
      <h2 className={styles['page-title']}>personal account</h2>
    </div>
  );
};
export default Account;
