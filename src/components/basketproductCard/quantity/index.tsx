import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { Cart, LineItem } from '@commercetools/platform-sdk';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { updateQuantity } from '../../../store/basket/basketSlice';
import styles from './quantity.module.scss';
import debounce from 'lodash.debounce';

type QuantityPropsType = {
  cart: Cart;
  lineItem: LineItem;
};

const Quantity: React.FC<QuantityPropsType> = ({ cart, lineItem }) => {
  const dispatch = useAppDispatch();
  const [itemQuantity, setItemQuantity] = useState<number>(lineItem.quantity);
  useEffect(() => {
    setItemQuantity(lineItem.quantity);
  }, [lineItem]);

  const debouncedHandler = useRef(
    debounce(async (val) => {
      dispatch(updateQuantity(val));
    }, 1000),
  ).current;

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e): void => {
    const action = {
      CartId: cart.id,
      productID: lineItem.id,
      quantity: itemQuantity,
      version: cart.version,
    };
    if (e.currentTarget.dataset['info'] === 'minus' && itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
      action.quantity = itemQuantity - 1;
    } else if (e.currentTarget.dataset['info'] === 'plus') {
      setItemQuantity(itemQuantity + 1);
      action.quantity = itemQuantity + 1;
    }

    debouncedHandler(action);
  };

  return (
    <div className={styles.container}>
      <button data-info="minus" onClick={handleClick}>
        -
      </button>
      <p>{itemQuantity}</p>
      <button data-info="plus" onClick={handleClick}>
        +
      </button>
    </div>
  );
};

export default Quantity;
