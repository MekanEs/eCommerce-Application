import React from 'react';
import Header from '../header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import styles from './layout.module.scss';
const Layout: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
