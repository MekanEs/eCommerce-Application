import React from 'react';
import womanImg from '../../assets/img/png/woman-login.png';
import Input from '../../components/input';
import Button from '../../components/button';
import { Link } from 'react-router-dom';
import styles from './login.module.scss';

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles['page-title']}>Welcome to «Veros» Store</h2>
      <div className={styles['registration-link']}>
        <p>Don't have an account? </p>
        <Link to="/registration">Register</Link>
      </div>
      <div className={styles['form-container']}>
        <div className={styles['image-container']}>
          <img className={styles.image} src={womanImg} alt="Woman" />
        </div>
        <form className={styles['login-form']}>
          <Input
            label="Email"
            type="text"
            id="login"
            name="login"
            placeholder="user@example.com"
          />
          <Input
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <Button
            label={'log in'}
            type="submit"
            onClick={function (): void {}}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
