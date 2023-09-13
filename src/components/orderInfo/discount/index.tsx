import { Cart } from '@commercetools/platform-sdk';
import React, { ChangeEventHandler, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { updateDiscount } from '../../../store/basket/basketSlice';
import styles from './discount.module.scss';

type CartDiscountPropsType = {
  cart: Cart;
};

const CartDiscount: React.FC<CartDiscountPropsType> = ({ cart }) => {
  const discounts = cart.discountCodes;
  const dispatch = useAppDispatch();
  const AllDiscounts = useAppSelector((state) => state.discounts.activeCodes);
  const [code, setCode] = useState<string>('');
  const handleClick = (id: string): void => {
    dispatch(
      updateDiscount({
        CartId: cart.id,
        version: cart.version,
        action: {
          action: 'removeDiscountCode',
          discountCode: { typeId: 'discount-code', id: id },
        },
      }),
    );
  };

  const handleInputApply = (): void => {
    dispatch(
      updateDiscount({
        CartId: cart.id,
        version: cart.version,
        action: {
          action: 'addDiscountCode',
          code: code,
        },
      }),
    );
    setCode('');
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setCode(e.currentTarget.value);
  };

  return (
    <div className={styles.container}>
      <h2>Promo codes</h2>
      <div className={styles.inputContainer}>
        <input
          onKeyDown={(e): void => {
            if (e.code === 'Enter') {
              handleInputApply();
            }
          }}
          placeholder="Enter your promocode"
          onChange={handleInputChange}
          type="text"
          value={code}
        />
        <button onClick={handleInputApply}>apply</button>
      </div>

      <ul className={styles.discounts}>
        {discounts.map((el, index) => {
          const discountCode =
            AllDiscounts &&
            AllDiscounts.filter(
              (discount) => discount.discountId === el.discountCode.id,
            )[0];
          return (
            <li key={index}>
              <p title={discountCode ? discountCode.description : ''}>
                {discountCode ? discountCode.code : ''}
              </p>

              <button
                title="close"
                onClick={(): void => {
                  if (discountCode && discountCode.discountId)
                    handleClick(discountCode.discountId);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartDiscount;
