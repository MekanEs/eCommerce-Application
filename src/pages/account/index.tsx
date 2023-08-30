import React, { ReactNode, useEffect, useState } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import createButton from '../../components/form/createButton/createButton';
import { createDateInputProfile } from '../../components/profile/form/createDateInput';
import { createEmailInputProfile } from '../../components/profile/form/createEmailInput';
import { createFirstNameInputProfile } from '../../components/profile/form/createFistName';
import { createLastNameInputProfile } from '../../components/profile/form/createLastNameInput';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { FormFields } from '../../interfaces/formInputs';
import { ISliceUser } from '../../interfaces/sliceUser';
import { getNewDataUser, getUserData } from '../../store/user/user.slice';
import styles from './account.module.scss';

const Account: React.FC = (): React.JSX.Element => {
  const [activeType, setActiveType] = useState(0);
  const array = ['General', 'My Address'];

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
      {activeType === 0 ? createUserGeneral() : createUserGeneral()}
    </div>
  );
};

function createUserGeneral(): React.JSX.Element {
  const form: UseFormReturn<FormFields> = useForm<FormFields>({
    mode: 'onChange',
  });
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FormFields> = (data: FormFields): void => {
    dispatch(getNewDataUser(data));
  };
  const state: ISliceUser = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {createRowTable(state, form)}
        <div className={styles['table-button']}>
          {createButton('save changes', styles.button)}
        </div>
      </form>
    </div>
  );
}

function createRowTable(
  state: ISliceUser,
  form: UseFormReturn<FormFields>,
): React.JSX.Element {
  return (
    <table className={styles['table-container']}>
      <tbody>
        <tr>
          <td className={styles['table-title-name']}>Personal info</td>
          <td className={styles['table-input']}></td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>First name</td>
          <td className={styles['table-input']}>
            {state.firstName
              ? createFirstNameInputProfile(form, state.firstName)
              : ''}
          </td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>Last name</td>
          <td className={styles['table-input']}>
            {state.lastName
              ? createLastNameInputProfile(form, state.lastName)
              : ''}
          </td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>Date of Birth</td>
          <td className={styles['table-input']}>
            {state.dateBirth
              ? createDateInputProfile(form, state.dateBirth)
              : ''}
          </td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>Email</td>
          <td className={styles['table-input']}>
            {state.email ? createEmailInputProfile(form, state.email) : ''}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Account;
