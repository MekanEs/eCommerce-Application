import React, { useEffect } from 'react';
import styles from './header.module.scss';
import Navigation from './nav';
import logo from '../../assets/img/svg/veros_logo.svg';
import profile from '../../assets/img/svg/profile_user.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { isActive } from '../../utils';
import { userAuth } from '../../hooks/user-auth';
import Logout from '../logout';
import { getBasket } from '../../store/basket/basketSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';

const Header: React.FC = () => {
  const path = useLocation().pathname;
  const dispatch = useAppDispatch();
  const isAuth = userAuth();
  useEffect(() => {
    dispatch(getBasket());
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
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/account">
              <img src={profile} alt="profile" />
            </NavLink>

            <Logout />
          </div>
        ) : (
          <div className={styles.auth}>
            <NavLink to="/cart">Cart</NavLink>
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
