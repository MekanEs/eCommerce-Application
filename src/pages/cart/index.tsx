import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import styles from './cart.module.scss';
import {
  getBasket,
  getBasketUser,
  removeProduct,
} from '../../store/basket/basketSlice';

const Cart: React.FC = () => {
  const basket = useAppSelector((state) => state.basket.basket);
  const basketItems = useAppSelector((state) => state.basket.basket?.lineItems);
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(getBasketUser());
    } else {
      dispatch(getBasket());
    }
  }, [dispatch]);
  return (
    <div>
      <h1>Cart</h1>
      {basket &&
        basketItems &&
        basketItems.map((el) => {
          return (
            <div className={styles.productCard}>
              <div>{el.name['en-US']}</div>
              <div>quantity: {el.quantity}</div>
              <div>
                price:{el.price.value.centAmount / 100} -{' '}
                {el.price.discounted?.value.centAmount &&
                  el.price.discounted?.value.centAmount / 100}
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
        })}
    </div>
  );
};

export default Cart;
