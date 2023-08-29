import React, { ReactNode, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { ISliceUser } from '../../interfaces/sliceUser';
import { getUserData } from '../../store/user/user.slice';
import createButton from '../../utils/helpers/functions/createButton';
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
  const state: ISliceUser = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <div>
      {createRowTable(state)}
      <div className={styles['table-button']}>
        {createButton('save changes')}
      </div>
    </div>
  );
}

function createRowTable(state: ISliceUser): React.JSX.Element {
  return (
    <table className={styles['table-container']}>
      <tbody>
        <tr>
          <td className={styles['table-title-name']}>Personal info</td>
          <td className={styles['table-input']}></td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>First name</td>
          <td className={styles['table-input']}>{state.firstName}</td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>Last name</td>
          <td className={styles['table-input']}>{state.lastName}</td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>Date of Birth</td>
          <td className={styles['table-input']}>{state.dateBirth}</td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>Email</td>
          <td className={styles['table-input']}>{state.email}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Account;
