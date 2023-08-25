import React from 'react';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { getNewPassword } from '../../store/user/user.slice';
import styles from './account.module.scss';

const Account: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  dispatch(getNewPassword());

  return (
    <div className={styles.container}>
      <h2 className={styles['page-title']}>personal account</h2>
      <div className={styles['form-container']}>{}</div>
    </div>
  );
};
export default Account;
