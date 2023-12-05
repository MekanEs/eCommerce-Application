import React, { useState } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { CreateButton } from '../../../form/createButton/createButton';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import { FormFields } from '../../../../interfaces/formInputs';
import { ISliceUser } from '../../../../interfaces/sliceUser';
import { getNewDataUser } from '../../../../store/user/user.slice';
import styles from '../userInfo.module.scss';
import { CreateTableInfo } from '../../personalInfo/tableInfo';
import { store } from '../../../../store/store';
import CreateMessage from '../../message/getMessage';

const CreateGeneralInfo: React.FC = (): React.JSX.Element => {
  const form: UseFormReturn<FormFields> = useForm<FormFields>({
    mode: 'onChange',
  });
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const onSubmit: SubmitHandler<FormFields> = (data: FormFields): void => {
    setSuccessMessage('');
    setErrorMessage('');
    dispatch(getNewDataUser(data)).then(() => {
      const state: ISliceUser = store.getState().user;
      if (state.status === 'ok') {
        setSuccessMessage(
          typeof state.message === 'string' ? state.message : '',
        );
      } else {
        setErrorMessage(typeof state.message === 'string' ? state.message : '');
      }
    });
  };
  const state: ISliceUser = useAppSelector((state) => state.user);

  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CreateTableInfo form={form} state={state} />
        {errorMessage && (
          <CreateMessage Message={errorMessage} className={'error'} />
        )}
        {successMessage && (
          <CreateMessage Message={successMessage} className={'success'} />
        )}
        <div className={styles['table-button']}>
          <CreateButton label={'save changes'} className={styles.button} />
        </div>
      </form>
    </>
  );
};

export default CreateGeneralInfo;
