import React from 'react';
import { Cart } from '@commercetools/platform-sdk';
import styles from './orderDetails.module.scss';
import TagPrice from '../../product/price/tagPrice';

type OrderDetailsPropsType = {
  cart: Cart;
};

const OrderDetails: React.FC<OrderDetailsPropsType> = ({ cart }) => {
  const price: number = cart.lineItems.reduce(
    (acc, el) => acc + (el.price.value.centAmount * el.quantity) / 100,
    0,
  );
  return (
    <div className={styles.container}>
      <h2>Order Details</h2>
      <div className={styles.info}>
        <p>items in the cart:</p>
        <p className={styles.amount}> {cart.lineItems.length}</p>
      </div>
      <div className={styles.info}>
        <p>Amount payable:</p>
        <div className={styles.price}>
          <TagPrice
            price={`${price}`}
            discountPrice={`${cart.totalPrice.centAmount / 100}`}
            styles={styles}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
