import React, { MouseEventHandler } from 'react';
import { Cart, LineItem } from '@commercetools/platform-sdk';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { updateQuantity } from '../../../store/basket/basketSlice';
import styles from './quantity.module.scss';

type QuantityPropsType = {
  cart: Cart;
  lineItem: LineItem;
};

const Quantity: React.FC<QuantityPropsType> = ({ cart, lineItem }) => {
  const dispatch = useAppDispatch();
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e): void => {
    let quantityCount = lineItem.quantity;

    if (e.currentTarget.dataset['info'] === 'minus') {
      quantityCount--;
    } else if (e.currentTarget.dataset['info'] === 'plus') {
      quantityCount++;
    }
    dispatch(
      updateQuantity({
        CartId: cart.id,
        productID: lineItem.id,
        quantity: quantityCount,
        version: cart.version,
      }),
    );
  };

  return (
    <div className={styles.container}>
      <button data-info="minus" onClick={handleClick}>
        -
      </button>
      <p>{lineItem.quantity}</p>
      <button data-info="plus" onClick={handleClick}>
        +
      </button>
    </div>
  );
};

export default Quantity;
