import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import styles from './cart.module.scss';
import { getBasket, getBasketUser } from '../../store/basket/basketSlice';
import { BasketProductCard, GoToCatalog, OrderInfo } from '../../components';

const Cart: React.FC = () => {
  const basket = useAppSelector((state) => state.basket.basket);
  const basketStatus = useAppSelector((state) => state.basket.status);
  const basketItems = useAppSelector((state) => state.basket.basket?.lineItems);
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    isAuth ? dispatch(getBasketUser()) : dispatch(getBasket());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <h2>Shopping cart</h2>
      {basketStatus === 'pending' ? (
        <div className={styles.pendingMsg}>Pending</div>
      ) : (
        <div className={styles.content}>
          {basketItems && basketItems.length > 0 ? (
            <>
              <div className={styles.cardsContainer}>
                {basket &&
                  basketItems &&
                  basketItems.map((el, index) => {
                    return (
                      <div className={styles.card} key={index}>
                        <BasketProductCard el={el} basket={basket} />
                      </div>
                    );
                  })}
              </div>
              <OrderInfo cart={basket} />
            </>
          ) : (
            <div className={styles.emptyCart}>
              <p>
                You haven't added anything to your cart yet. Go to the catalog
                and choose your new bike
              </p>
              <GoToCatalog />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
