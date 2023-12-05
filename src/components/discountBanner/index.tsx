import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import styles from './discountBanner.module.scss';
import { updateDiscount } from '../../store/basket/basketSlice';
import { MyCartUpdateAction } from '@commercetools/platform-sdk';

const DiscountBanner: React.FC = () => {
  const discountCodes = useAppSelector((state) => state.discounts.activeCodes);
  const basket = useAppSelector((state) => state.basket.basket);
  const dispatch = useAppDispatch();
  if (!basket) {
    return <></>;
  }

  const handleClick = (action: MyCartUpdateAction): void => {
    dispatch(
      updateDiscount({
        CartId: basket?.id,

        version: basket?.version,
        action: action,
      }),
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Use our promo codes!</h2>

        <div className={styles.dicounts}>
          {discountCodes.map((el, index) => {
            const isActivated =
              basket.discountCodes.filter(
                (code) => code.discountCode.id === el.discountId,
              ).length > 0;

            return (
              <div className={styles['discount-container']} key={index}>
                <hr className={styles['dash-line']}></hr>
                <div className={styles.discount}>
                  <div className={styles.code}>{el.code}</div>
                  <p>{el.description}</p>
                  <button
                    onClick={(): void => {
                      if (el.code) {
                        isActivated
                          ? el.discountId &&
                            handleClick({
                              action: 'removeDiscountCode',
                              discountCode: {
                                typeId: 'discount-code',
                                id: el.discountId,
                              },
                            })
                          : handleClick({
                              action: 'addDiscountCode',
                              code: el.code,
                            });
                      }
                    }}
                    className={styles.applyBtn}
                  >
                    {isActivated ? 'remove' : 'apply'}
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
