import React from 'react';
import styles from './profile.module.scss';
import { Link } from 'react-router-dom';

const Profile: React.FC = (): React.JSX.Element => {
  return (
    <div className={styles.container}>
      <h2 className={styles['page-title']}>personal account</h2>
      <div className={styles['login-link']}>
        <p>Have an account? </p>
        <Link to="/login">Log in</Link>
      </div>
      <div className={styles['form-container']}>{}</div>
    </div>
  );
};
export default Profile;
