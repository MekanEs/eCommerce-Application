import React, { ReactNode, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { getUserData } from '../../store/user/user.slice';
import styles from './account.module.scss';
import classNames from 'classnames';
import CreateGeneralInfo from './userInfo/createGeneralInfo';
import CreateGeneralPassword from './userInfo/createGeneralPassword';
import CreateUserAddress from './userAddress/createUserAddress';

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
        <div>
          <CreateUserAddress />
        </div>
      )}
    </div>
  );
};

export default Account;
