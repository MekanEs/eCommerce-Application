import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import styles from './cart.module.scss';
import { getBasket } from '../../store/basket/basketSlice';
import { BasketProductCard, OrderInfo } from '../../components';

const Cart: React.FC = () => {
  const basket = useAppSelector((state) => state.basket.basket);
  const basketStatus = useAppSelector((state) => state.basket.status);
  const basketItems = useAppSelector((state) => state.basket.basket?.lineItems);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <h2>Shopping cart</h2>
      {basketStatus === 'pending' ? (
        <div className={styles.emptyMsg}>Pending</div>
      ) : (
        <div className={styles.content}>
          {basketItems && basketItems.length > 0 ? (
            <div className={styles.cardsContainer}>
              {basket &&
                basketItems &&
                basketItems.map((el, index) => {
                  return (
                    <BasketProductCard el={el} key={index} basket={basket} />
                  );
                })}
            </div>
          ) : (
            <div className={styles.emptyMsg}>Cart is empty</div>
          )}

          <OrderInfo cart={basket} />
        </div>
      )}
    </div>
  );
};

export default Cart;
