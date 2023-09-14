import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { Cart, LineItem } from '@commercetools/platform-sdk';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { updateQuantity } from '../../../store/basket/basketSlice';
import styles from './quantity.module.scss';
import debounce from 'lodash.debounce';
import cx from 'classnames';

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

  const stock = lineItem.variant.attributes?.filter(
    (attribute) => attribute.name === 'stock',
  )[0].value;

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e): void => {
    const action = {
      CartId: cart.id,
      productID: lineItem.id,
      quantity: itemQuantity,
      version: cart.version,
    };
    const data = e.currentTarget.dataset['info'];
    if (data === 'minus' && itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
      action.quantity = itemQuantity - 1;
    } else if (data === 'plus' && itemQuantity < stock) {
      setItemQuantity(itemQuantity + 1);
      action.quantity = itemQuantity + 1;
    }

    debouncedHandler(action);
  };

  return (
    <div
      className={cx(
        styles.container,
        itemQuantity < stock ? '' : styles.redQuantity,
      )}
    >
      <button data-info="minus" onClick={handleClick}>
        -
      </button>
      <p>{itemQuantity}</p>

      <button
        disabled={itemQuantity < stock ? false : true}
        data-info="plus"
        onClick={handleClick}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
