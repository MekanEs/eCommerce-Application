import React from 'react';
import { Cart, LineItem } from '@commercetools/platform-sdk';
import styles from './basketProdyuctCard.module.scss';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { removeProduct } from '../../../store/basket/basketSlice';

type basketProductCardTypeProps = {
  el: LineItem;
  basket: Cart;
};
const BasketProductCard: React.FC<basketProductCardTypeProps> = ({
  el,
  basket,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.productCard}>
      <div>{el.name['en-US']}</div>
      <div>quantity: {el.quantity}</div>
      <div>
        price:{el.price.value.centAmount / 100} -{' '}
        {el.price.discounted?.value.centAmount &&
          el.price.discounted?.value.centAmount / 100}
      </div>
      <div>
        total:{(el.price.value.centAmount * el.quantity) / 100} -{' '}
        {el.price.discounted?.value.centAmount &&
          (el.price.discounted?.value.centAmount * el.quantity) / 100}
      </div>
      <button
        onClick={(): void => {
          dispatch(
            removeProduct({
              CartId: basket.id,
              productID: el.id,
              version: basket.version,
            }),
          );
        }}
      >
        delete from cart
      </button>
    </div>
  );
};

export default BasketProductCard;
