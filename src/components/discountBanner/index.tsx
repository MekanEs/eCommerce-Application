import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import styles from './discountBanner.module.scss';
import { updateDiscount } from '../../store/basket/basketSlice';

const DiscountBanner: React.FC = () => {
  const discountCodes = useAppSelector((state) => state.discounts.activeCodes);
  const basket = useAppSelector((state) => state.basket.basket);
  const dispatch = useAppDispatch();
  if (!basket) {
    return <></>;
  }

  const handleClick = (code: string): void => {
    dispatch(
      updateDiscount({
        CartId: basket?.id,

        version: basket?.version,
        action: {
          action: 'addDiscountCode',
          code: code,
        },
      }),
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Use our promo codes!</h2>

        <div className={styles.dicounts}>
          {discountCodes.map((el, index) => {
            return (
              <div className={styles['discount-container']} key={index}>
                <hr className={styles['dash-line']}></hr>
                <div className={styles.discount}>
                  <div className={styles.code}>{el.code}</div>
                  <p>{el.description}</p>
                  <button
                    onClick={(): void => {
                      if (el.code) handleClick(el.code);
                    }}
                    className={styles.applyBtn}
                  >
                    apply
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
