import React from 'react';
import { Link } from 'react-router-dom';
import {
  FieldErrors,
  SubmitHandler,
  UseFormRegister,
  useForm,
} from 'react-hook-form';
import { TextInput, PasswordInput } from '../../components/inputs';
import Button from '../../components/button';
import { FormFields } from '../../utils/helpers/interface';
import womanImg from '../../assets/img/png/woman-login.png';
import styles from './login.module.scss';

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

function createEmailInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<
    Readonly<{
      email?: boolean | undefined;
      password?: boolean | undefined;
    }>
  >,
  register: UseFormRegister<FormFields>,
): JSX.Element {
  return (
    <TextInput
      label="Email"
      type="text"
      id="email"
      placeholder="user@example.com"
      hookData={register('email', {
        required: 'The field is required',
        validate: validateEmail,
      })}
      errorMessage={errors && errors.email && errors.email?.message}
      isValid={!errors.email && dirtyFields?.email}
    />
  );
}

function createPasswordInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<
    Readonly<{
      email?: boolean | undefined;
      password?: boolean | undefined;
    }>
  >,
  register: UseFormRegister<FormFields>,
): JSX.Element {
  return (
    <PasswordInput
      label="Password"
      id="password"
      placeholder="Enter your password"
      hookData={register('password', {
        required: 'The field is required',
        minLength: { value: 8, message: 'Min length 8 characters' },
        validate: validatePassword,
      })}
      errorMessage={errors && errors.password && errors.password?.message}
      isValid={!errors.password && dirtyFields?.password}
    />
  );
}

function validateEmail(value: string): boolean | string {
  if (!/.+@/.test(value)) {
    return 'Enter a valid domain for the email address, e.g. user@example.com';
  }

  if (!/@/.test(value)) {
    return 'Email address must contain the "@" symbol';
  }

  if (value.trim() !== value) {
    return 'Password must not contain leading or trailing spaces';
  }

  if (!value.match(/@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,}$/)) {
    return 'Enter a valid domain for the email address, e.g. user@example.com';
  }

  return true;
}

function validatePassword(value: string): boolean | string {
  if (!/[A-Z]/.test(value)) {
    return 'Password must contain at least one uppercase letter (AZ)';
  }

  if (!/[a-z]/.test(value)) {
    return 'Password must contain at least one lowercase letter (az)';
  }

  if (!/\d/.test(value)) {
    return 'Password must contain at least one number (0-9)';
  }

  if (!/[!\\"#$%&'()*+,-.\\/:;<=>?@[\\\]^_`{|}~]/.test(value)) {
    return 'Password must contain at least one special character (e.g. !@#$%^&*)';
  }

  if (value.trim() !== value) {
    return 'Password must not contain leading or trailing spaces';
  }

  if (!/^[A-Za-z\d!!\\"#$%&'()*+,-.\\/:;<=>?@[\\\]^_`{|}~]+$/.test(value)) {
    return 'Password must only contain English letters, digits, and allowed special characters';
  }

  return true;
}

export default Login;
