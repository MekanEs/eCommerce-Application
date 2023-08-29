import React, { ReactNode, useState } from 'react';
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
    </div>
  );
};

export default Account;
