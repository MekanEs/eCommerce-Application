import React, { ReactNode, useEffect, useState } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { CreateButton } from '../../components/form/createButton/createButton';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { FormFields } from '../../interfaces/formInputs';
import { ISliceUser } from '../../interfaces/sliceUser';
import {
  getNewDataUser,
  getNewPassword,
  getUserData,
} from '../../store/user/user.slice';
import styles from './account.module.scss';
import {
  CreateTableInfo,
  CreateTablePassword,
} from '../../components/profile/personalInfo/createTable';
import classNames from 'classnames';
import { store } from '../../store/store';

const Account: React.FC = (): React.JSX.Element => {
  const [activeType, setActiveType] = useState(0);
  const dispatch = useAppDispatch();
  const array = ['General', 'My Address'];

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles['page-title']}>personal account</h2>
      <div className={styles['info-container']}>
        {array.map((elem, index): ReactNode => {
          return (
            <div
              key={index}
              onClick={(): void => setActiveType(index)}
              className={classNames(styles['info-container_title'], {
                [styles['active']]: activeType === index,
              })}
            >
              {elem}
            </div>
          );
        })}
      </div>
      {activeType === 0 ? (
        <div>
          <CreateGeneralInfo />
          <CreateGeneralPassword />
        </div>
      ) : (
        <div>{1}</div>
      )}
    </div>
  );
};

const CreateGeneralInfo: React.FC = (): React.JSX.Element => {
  const form: UseFormReturn<FormFields> = useForm<FormFields>({
    mode: 'onChange',
  });
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
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

export type CreateMessage = {
  Message: string;
  className: string;
};

const CreateMessage: React.FC<CreateMessage> = ({
  Message,
  className,
}): JSX.Element => {
  return (
    <div>
      <p className={`${styles['form-message']} ${styles[className]}`}>
        {Message}
      </p>
    </div>
  );
};

export default Account;
