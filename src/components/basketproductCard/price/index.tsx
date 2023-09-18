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
  const initDiscount = lineItem.price.discounted?.value.centAmount;
  const afterPromo: number | undefined =
    lineItem.discountedPricePerQuantity[0]?.discountedPrice.value.centAmount;
  const discount = afterPromo ? afterPromo : initDiscount;
  return (
    <div>
      <div className={cx(styles.productPrice, styles.totalPrice)}>
        <TagPrice
          price={`${price.toFixed(2)}`}
          discountPrice={
            discount ? `${(discount / 100).toFixed(2)}` : undefined
          }
          styles={styles}
        />
        Price:
      </div>
      {lineItem.quantity > 1 ? (
        <div className={cx(styles.productPrice, styles.totalPrice)}>
          <TagPrice
            price={`${(price * lineItem.quantity).toFixed(2)}`}
            discountPrice={
              discount
                ? `${((discount * lineItem.quantity) / 100).toFixed(2)}`
                : undefined
            }
            styles={styles}
          />
          Total:
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default CartPrice;
