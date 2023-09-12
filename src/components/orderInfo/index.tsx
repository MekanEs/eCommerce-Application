import React from 'react';
import { Cart } from '@commercetools/platform-sdk';
import styles from './orderInfo.module.scss';
import ClearCart from './clearCart';
import CartDiscount from './discount';

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
        <h4>Order Details</h4>
        <div>
          <p>items in the cart</p>
          <p>{cart.lineItems.length}</p>
        </div>
        <div>
          <p>Amount payable</p>
          <p>{cart.totalPrice.centAmount / 100}</p>
        </div>
        <CartDiscount cart={cart} />
      </div>

      <ClearCart basket={cart} />
    </div>
  );
};

export default OrderInfo;
