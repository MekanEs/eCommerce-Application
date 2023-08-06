import React from 'react';
import styles from './App.module.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { About, Login, Main, PageNotFound, Registartion } from './pages';
import { Footer, Header } from './Components';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header />
        <div className={styles.container}>
          <Routes>
            <Route index path="/" element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="registration" element={<Registartion />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
