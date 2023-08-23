import React from 'react';
import { removeUser } from '../../store/auth/auth.slice';
import { useAppDispatch } from '../../hooks/redux-hooks';
import styles from './logout.module.scss';

const Logout: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleClick: () => void = () => {
    dispatch(removeUser());
    localStorage.removeItem('token');
  };
  return (
    <div className={styles.container}>
      <button className={styles.logout} onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
