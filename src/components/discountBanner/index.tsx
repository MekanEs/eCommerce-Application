import React from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import styles from './discountBanner.module.scss';

const DiscountBanner: React.FC = () => {
  const discountCodes = useAppSelector((state) => state.discounts.activeCodes);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Use our promo codes!</h2>

        <div className={styles.dicounts}>
          {discountCodes.map((el, index) => {
            return (
              <div className={styles.discount} key={index}>
                <div className={styles.code}>{el.code}</div>
                <div>{el.description}</div>
                <button className={styles.applyBtn}>apply</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
