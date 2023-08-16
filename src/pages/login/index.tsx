import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormFields } from '../../utils/helpers/interface';
import womanImg from '../../assets/img/png/woman-login.png';
import styles from './login.module.scss';
import {
  createEmailInput,
  createPasswordInput,
} from '../../utils/helpers/functions';
import createButton from '../../utils/helpers/functions/createButton';
import { loginUser } from '../../store/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';

const Login: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { status, message } = useAppSelector((state) => state.user);
  const form = useForm<FormFields>({ mode: 'onChange' });
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    useEffect(() => {
      dispatch(loginUser(data)).then(() => {
        console.log(status, message);
      }),
        [];
    });
    setWarningMessage('');
    form.reset();
  };
  const [warningMessage, setWarningMessage] = useState('');

  return (
    <div className={styles.container}>
      <h2 className={styles['page-title']}>Welcome to «Veros» Store</h2>
      <div className={styles['registration-link']}>
        <p>Don't have an account? </p> <Link to="/registration">Register</Link>
      </div>
      <div className={styles['form-container']}>
        <div className={styles['image-container']}>
          <img className={styles.image} src={womanImg} alt="Woman" />
        </div>
        <form
          className={styles['login-form']}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {createEmailInput(form)}
          {createPasswordInput(form, warningMessage, setWarningMessage)}
          {createButton('log in')}
        </form>
      </div>
    </div>
  );
};

export default Login;
