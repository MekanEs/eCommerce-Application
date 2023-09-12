import React from 'react';
import styles from './price.module.scss';

import cx from 'classnames';
import { LineItem } from '@commercetools/platform-sdk';
import TagPrice from '../../product/price/tagPrice';

type CartPricePropsType = {
  lineItem: LineItem;
};

const CartPrice: React.FC<CartPricePropsType> = ({ lineItem }) => {
  const price = lineItem.price.value.centAmount / 100;
  const discount = lineItem.price.discounted?.value.centAmount;
  return (
    <>
      <div className={styles.productPrice}>
        <TagPrice
          price={`${price}`}
          discountPrice={discount ? `${discount / 100}` : undefined}
          styles={styles}
        />
      </div>
      {lineItem.quantity > 1 ? (
        <div className={cx(styles.productPrice, styles.totalPrice)}>
          <TagPrice
            price={`${price * lineItem.quantity}`}
            discountPrice={
              discount ? `${(discount * lineItem.quantity) / 100}` : undefined
            }
            styles={styles}
          />
          Total:
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default CartPrice;
