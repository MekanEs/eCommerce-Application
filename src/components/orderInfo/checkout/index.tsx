import React from 'react';
import { Cart } from '@commercetools/platform-sdk';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { removeLineItem } from '../../../store/basket/basketSlice';
import styles from './checkout.module.scss';

type checkoutCart = {
  basket: Cart;
};
const CheckoutCart: React.FC<checkoutCart> = ({ basket }) => {
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
    <button className={styles.checkoutBtn} onClick={handleClick}>
      checkout
    </button>
  );
};

export default CheckoutCart;
