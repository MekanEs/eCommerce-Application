import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { useAppDispatch } from '../../hooks/redux-hooks';
import { store } from '../../store/store';

const Login: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigator = useNavigate();
  const form = useForm<FormFields>({ mode: 'onChange' });
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    dispatch(loginUser(data)).then(() => {
      const state = store.getState().user;
      if (state.status === 'ok') {
        form.reset();
        navigator('/');
      } else {
        console.log(state.message);
      }
    });
    setWarningMessage('');
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
