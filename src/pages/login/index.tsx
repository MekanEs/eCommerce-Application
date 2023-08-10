import React from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../components/button';
import { FormFields } from '../../utils/helpers/interface';
import womanImg from '../../assets/img/png/woman-login.png';
import styles from './login.module.scss';
import {
  createEmailInput,
  createPasswordInput,
} from '../../utils/helpers/functions';

const Login: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm<FormFields>({ mode: 'onChange' });
  const onSubmit: SubmitHandler<FormFields> = () => reset();

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
        <form
          className={styles['login-form']}
          onSubmit={handleSubmit(onSubmit)}
        >
          {createEmailInput(errors, dirtyFields, register)}
          {createPasswordInput(errors, dirtyFields, register)}
          <Button
            label={'log in'}
            type="submit"
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
