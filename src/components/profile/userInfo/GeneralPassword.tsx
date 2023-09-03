import React, { useState } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { CreateButton } from '../../form/createButton/createButton';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { FormFields } from '../../../interfaces/formInputs';
import { ISliceUser } from '../../../interfaces/sliceUser';
import styles from './userInfo.module.scss';
import { store } from '../../../store/store';
import CreateMessage from '../message/getMessage';
import { getNewPassword } from '../../../store/user/user.slice';
import { CreateTablePassword } from '../personalInfo/createTable';

const CreateGeneralPassword: React.FC = (): React.JSX.Element => {
  const form: UseFormReturn<FormFields> = useForm<FormFields>({
    mode: 'onChange',
  });
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const onSubmit: SubmitHandler<FormFields> = (data: FormFields): void => {
    setSuccessMessage('');
    setErrorMessage('');
    if (data.newPassword === data.currentPassword) {
      dispatch(getNewPassword(data)).then(() => {
        const state: ISliceUser = store.getState().user;
        if (state.status === 'ok') {
          setSuccessMessage(
            typeof state.message === 'string' ? state.message : '',
          );
        } else {
          setErrorMessage(
            typeof state.message === 'string' ? state.message : '',
          );
        }
      });
    } else {
      setErrorMessage('passwords did not match');
    }
  };

  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CreateTablePassword form={form} />
        {errorMessage && (
          <CreateMessage Message={errorMessage} className={'error'} />
        )}
        {successMessage && (
          <CreateMessage Message={successMessage} className={'success'} />
        )}
        <div className={styles['table-button']}>
          <CreateButton label={'save new password'} className={styles.button} />
        </div>
      </form>
    </>
  );
};

export default CreateGeneralPassword;
