import React from 'react';
import styles from './registration.module.scss';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormFields } from '../../utils/helpers/interface';

const Registartion: React.FC = (): JSX.Element => {
  const { handleSubmit, reset } = useForm<FormFields>({ mode: 'onChange' });
  const onSubmit: SubmitHandler<FormFields> = () => reset();

  return (
    <div className={styles.container}>
      <h2 className={styles['page-title']}>Welcome to «Veros» Store</h2>
      <div className={styles['login-link']}>
        <p>Have an account? </p>
        <Link to="/login">Log in</Link>
      </div>
      <div className={styles['form-container']}>
        <form
          className={styles['login-form']}
          onSubmit={handleSubmit(onSubmit)}
        ></form>
      </div>
    </div>
  );
};

export default Registartion;
