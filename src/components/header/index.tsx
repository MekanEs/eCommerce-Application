import React, { useEffect } from 'react';
import styles from './header.module.scss';
import Navigation from './nav';
import logo from '../../assets/img/svg/veros_logo.svg';
import cart from '../../assets/img/svg/cart.svg';
import profile from '../../assets/img/svg/profile_user.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { isActive } from '../../utils';
import { userAuth } from '../../hooks/user-auth';
import Logout from '../logout';
import { getBasket, getBasketUser } from '../../store/basket/basketSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';

const Header: React.FC = () => {
  const path = useLocation().pathname;
  const dispatch = useAppDispatch();
  const isAuth = userAuth();
  const count = useAppSelector(
    (state) => state.basket.basket?.lineItems.length,
  );
  useEffect(() => {
    if (isAuth) {
      dispatch(getBasketUser());
    } else {
      dispatch(getBasket());
    }
  }, [isAuth]);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>

        {path === '/registration' || path === '/login' ? (
          ''
        ) : isAuth ? (
          <div className={styles.profile}>
            <NavLink to="/cart">
              <div className={styles['cart-container']}>
                <img src={cart} alt="cart" />
                <span className={styles['cart-count']}>{count}</span>
              </div>
            </NavLink>
            <NavLink to="/account">
              <img src={profile} alt="profile" />
            </NavLink>

            <Logout />
          </div>
        ) : (
          <div className={styles.auth}>
            <NavLink to="/cart">
              <div className={styles['cart-container']}>
                <img src={cart} alt="cart" />
                <span className={styles['cart-count']}>{count}</span>
              </div>
            </NavLink>
            <NavLink className={isActive} to="registration">
              registration
            </NavLink>
            <NavLink className={isActive} to="login">
              log&nbsp;in
            </NavLink>{' '}
          </div>
        )}
      </header>
      <Navigation />
    </div>
  );
};
export default Header;
