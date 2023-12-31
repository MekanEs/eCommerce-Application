import React from 'react';
import { Cart } from '@commercetools/platform-sdk';
import styles from './orderInfo.module.scss';
import ClearCart from './clearCart';
import CartDiscount from './discount';
import OrderDetails from './orderDetails';
import CheckoutCart from './checkout';

type OrderInfoPropsType = {
  cart: Cart | undefined;
};
const OrderInfo: React.FC<OrderInfoPropsType> = ({ cart }) => {
  if (!cart) {
    return <></>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <OrderDetails cart={cart} />

        <CartDiscount cart={cart} />
      </div>
      <CheckoutCart basket={cart} />
      <ClearCart basket={cart} />
    </div>
  );
};

export default OrderInfo;
