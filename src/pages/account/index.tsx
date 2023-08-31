import React, { ReactNode, useEffect, useState } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import createButton from '../../components/form/createButton/createButton';
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
  createTableInfo,
  createTablePassword,
} from './personalInfo/createTable';

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
              className={
                activeType === index
                  ? `${styles['info-container_title']} ${styles['active']}`
                  : `${styles['info-container_title']}`
              }
            >
              {elem}
            </div>
          );
        })}
      </div>
      {activeType === 0 ? (
        <div>
          {createGeneralInfo()}
          {createGeneralPassword()}
        </div>
      ) : (
        createGeneralInfo()
      )}
    </div>
  );
};

function createGeneralInfo(): React.JSX.Element {
  const form: UseFormReturn<FormFields> = useForm<FormFields>({
    mode: 'onChange',
  });
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FormFields> = (data: FormFields): void => {
    dispatch(getNewDataUser(data));
  };
  const state: ISliceUser = useAppSelector((state) => state.user);

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {createTableInfo(state, form)}
        <div className={styles['table-button']}>
          {createButton('save changes', styles.button)}
        </div>
      </form>
    </div>
  );
}

function createGeneralPassword(): React.JSX.Element {
  const form: UseFormReturn<FormFields> = useForm<FormFields>({
    mode: 'onChange',
  });
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FormFields> = (data: FormFields): void => {
    dispatch(getNewPassword(data));
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {createTablePassword(form)}
        <div className={styles['table-button']}>
          {createButton('save new password', styles.button)}
        </div>
      </form>
    </div>
  );
}

export default Account;
