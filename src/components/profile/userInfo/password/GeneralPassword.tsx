import React, { useState } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { CreateButton } from '../../../form/createButton/createButton';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import { FormFields } from '../../../../interfaces/formInputs';
import { ISliceUser } from '../../../../interfaces/sliceUser';
import styles from '../userInfo.module.scss';
import { store } from '../../../../store/store';
import CreateMessage from '../../message/getMessage';
import { getNewPassword } from '../../../../store/user/user.slice';
import { CreateTablePassword } from '../../personalInfo/tablePassword';
import { loginUserRegister } from '../../../../store/auth/auth.slice';
import {
  resetAnonymToken,
  resetToken,
} from '../../../../utils/services/getToken';
import { useNavigate } from 'react-router-dom';

const CreateGeneralPassword: React.FC = (): React.JSX.Element => {
  const form: UseFormReturn<FormFields> = useForm<FormFields>({
    mode: 'onChange',
  });
  const dispatch = useAppDispatch();
  const navigator = useNavigate();
  const email = useAppSelector((state) => state.user.email);

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
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
          resetAnonymToken();
          resetToken();

          setTimeout(() => {
            if (!email) {
              return;
            }
            dispatch(
              loginUserRegister({
                email: email,
                password: data.newPassword,
              }),
            );
            navigator('/');
          }, 500);
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
