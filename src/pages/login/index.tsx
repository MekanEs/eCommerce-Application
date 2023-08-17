import React, { Dispatch, useEffect, useState } from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { SubmitHandler, UseFormReturn, useForm } from 'react-hook-form';
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
import { ThunkDispatch } from 'redux-thunk/es/types';
import { ISliceUser } from '../../interfaces/sliceUser';
import { AnyAction } from '@reduxjs/toolkit';

const Login: React.FC = (): JSX.Element => {
  const form = useForm<FormFields>({ mode: 'onChange' });
  const dispatch = useAppDispatch();
  const navigator = useNavigate();
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    login(data, form, setErrorMessage, dispatch, navigator);
    setWarningMessage('');
  };
  const [warningMessage, setWarningMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  createUseEffect(form, errorMessage, setErrorMessage);

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
        {errorMessage && <p className={styles['form-error']}>{errorMessage}</p>}
      </div>
    </div>
  );
};

function login(
  data: FormFields,
  form: UseFormReturn<FormFields, undefined, undefined>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  dispatch: ThunkDispatch<{ user: ISliceUser }, undefined, AnyAction> &
    Dispatch<AnyAction>,
  navigator: NavigateFunction,
): void {
  dispatch(loginUser(data)).then(() => {
    const state = store.getState().user;
    if (state.status === 'ok') {
      form.reset();
      navigator('/');
    } else {
      form.setError('email', {});
      form.setError('password', {});

      setErrorMessage(typeof state.message === 'string' ? state.message : '');
    }
  });
}

function createUseEffect(
  form: UseFormReturn<FormFields, undefined, undefined>,
  errorMessage: string,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
): void {
  useEffect(() => {
    if (errorMessage != '') {
      form.trigger('email');
      form.trigger('password');
    }
    setErrorMessage('');
  }, [form.watch('email'), form.watch('password')]);
}

export default Login;
function setErrorMessage(value: SetStateAction<string>): void {
  throw new Error('Function not implemented.');
}

