import React from 'react';
import { CTP_PROJECT_KEY } from '../../services';
import { getApiRootToken } from '../../services/ClientBuilder';
import styles from './account.module.scss';

const Account: React.FC = (): React.JSX.Element => {
  getApiRootToken()
    .withProjectKey({ projectKey: CTP_PROJECT_KEY })
    .get()
    .execute();
  return (
    <div className={styles.container}>
      <h2 className={styles['page-title']}>personal account</h2>
      <div className={styles['form-container']}>{}</div>
    </div>
  );
};
export default Account;
