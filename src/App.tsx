import React from 'react';
import { Outlet, RouterProvider } from 'react-router-dom';
import styles from './App.module.scss';
import { Footer, Header } from './components';
import { router } from './components/routing/routes';

export const Layout: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
