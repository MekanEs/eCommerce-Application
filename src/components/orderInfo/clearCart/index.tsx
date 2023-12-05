import React from 'react';
import { Cart } from '@commercetools/platform-sdk';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { removeLineItem } from '../../../store/basket/basketSlice';
import styles from './clearCart.module.scss';

type ClearCartPropsType = {
  basket: Cart;
};
const ClearCart: React.FC<ClearCartPropsType> = ({ basket }) => {
  const dispatch = useAppDispatch();

  const handleClick = async (): Promise<void> => {
    if (basket.lineItems.length > 0) {
      await dispatch(
        removeLineItem({
          CartId: basket.id,
          version: basket.version,
          lineItemID: basket.lineItems,
        }),
      );
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.clearBtn} onClick={handleClick}>
        clear shopping cart
      </button>
    </div>
  );
};

export default ClearCart;
