import React from 'react';
import Header from '../header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import styles from './layout.module.scss';
import { isNotFound } from '../../utils';
const Layout: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      <main className={isNotFound() ? styles.gray_bg : ''}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
