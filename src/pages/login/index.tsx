import React, { useEffect, useState } from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { SubmitHandler, UseFormReturn, useForm } from 'react-hook-form';
import { FormFields } from '../../interfaces/formInputs';
import womanImg from '../../assets/img/png/woman-login.png';
import styles from './login.module.scss';
import {
  createEmailInput,
  createPasswordInput,
} from '../../utils/helpers/formElements';
import { CreateButton } from '../../components/form/createButton/createButton';
import { loginUser } from '../../store/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { store } from '../../store/store';
import { ISliceAuth } from '../../interfaces/sliceAuth';

const Login: React.FC = (): JSX.Element => {
  const form: UseFormReturn<FormFields> = useForm<FormFields>({
    mode: 'onChange',
  });
  const anonymCartID = useAppSelector(
    (state) => state.basket.basket && state.basket.basket.id,
  );
  const dispatch = useAppDispatch();
  const navigator: NavigateFunction = useNavigate();
  const onSubmit: SubmitHandler<FormFields> = (data: FormFields): void => {
    dispatch(
      loginUser({
        password: data.password,
        email: data.email,
        anonymId: anonymCartID,
      }),
    ).then((): void => {
      const state: ISliceAuth = store.getState().auth;
      if (state.status === 'ok') {
        form.reset();
        navigator('/');
      } else {
        form.setError('email', {});
        form.setError('password', {});

        setErrorMessage(typeof state.message === 'string' ? state.message : '');
      }
    });
    setWarningMessage('');
  };
  const [warningMessage, setWarningMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

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
          <CreateButton label={'log in'} className={styles.button} />
        </form>
        {errorMessage && <p className={styles['form-error']}>{errorMessage}</p>}
      </div>
    </div>
  );
};

function createUseEffect(
  form: UseFormReturn<FormFields>,
  errorMessage: string,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
): void {
  useEffect((): void => {
    if (errorMessage != '') {
      form.trigger('email');
      form.trigger('password');
    }
    setErrorMessage('');
  }, [form.watch('email'), form.watch('password')]);
}

export default Login;
