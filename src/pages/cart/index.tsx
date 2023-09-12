import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import styles from './cart.module.scss';
import { getBasket, getBasketUser } from '../../store/basket/basketSlice';
import { BasketProductCard, OrderInfo } from '../../components';

const Cart: React.FC = () => {
  const basket = useAppSelector((state) => state.basket.basket);
  const basketStatus = useAppSelector((state) => state.basket.status);
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
    <div className={styles.container}>
      <h1>Cart</h1>
      {basketStatus === 'pending' ? (
        'pending'
      ) : basketItems && basketItems.length > 0 ? (
        <div className={styles.content}>
          <div className={styles.cardsContainer}>
            {basket &&
              basketItems &&
              basketItems.map((el, index) => {
                return (
                  <BasketProductCard el={el} key={index} basket={basket} />
                );
              })}
          </div>

          <OrderInfo cart={basket} />
        </div>
      ) : (
        'Cart is empty'
      )}
    </div>
  );
};

export default Cart;
