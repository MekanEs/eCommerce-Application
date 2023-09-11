import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import styles from './cart.module.scss';
import { getBasket, getBasketUser } from '../../store/basket/basketSlice';
import { BasketProductCard, OrderInfo } from '../../components';

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
    <div className={styles.container}>
      <h1>Cart</h1>
      <div className={styles.content}>
        <div className={styles.cardsContainer}>
          {basket &&
            basketItems &&
            basketItems.map((el, index) => {
              return <BasketProductCard el={el} key={index} basket={basket} />;
            })}
        </div>

        <OrderInfo cart={basket} />
      </div>
    </div>
  );
};

export default Cart;
