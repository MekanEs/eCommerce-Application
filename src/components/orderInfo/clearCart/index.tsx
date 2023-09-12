import React from 'react';
import { Cart } from '@commercetools/platform-sdk';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { removeLineItem } from '../../../store/basket/basketSlice';

type ClearCartPropsType = {
  basket: Cart;
};
const ClearCart: React.FC<ClearCartPropsType> = ({ basket }) => {
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
    <div>
      <button onClick={handleClick}>clear shopping cart</button>
    </div>
  );
};

export default ClearCart;
