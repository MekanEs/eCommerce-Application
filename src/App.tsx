import React, { FunctionComponent } from 'react';
import './App.scss';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route index path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="registration" element={<Registartion />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <footer className="App-footer">Footer</footer>
      </div>
    </BrowserRouter>
  );
}

// eslint-disable-next-line max-lines-per-function
const Header: FunctionComponent = () => {
  return (
    <header className="App-header">
      <ul className="nav">
        <li>
          <button>
            <NavLink to="/">Main</NavLink>
          </button>
        </li>
        <li>
          <button>
            <NavLink to="about">About</NavLink>
          </button>
        </li>
        <li>
          <button>
            <NavLink to="registration">Registartion</NavLink>
          </button>
        </li>
        <li>
          <button>
            <NavLink to="login">Login</NavLink>
          </button>
        </li>
      </ul>
    </header>
  );
};
const Main: FunctionComponent = () => {
  return <div>Main</div>;
};
const Registartion: FunctionComponent = () => {
  return <div>Registartion</div>;
};
const Login: FunctionComponent = () => {
  return <div>Login</div>;
};
const About: FunctionComponent = () => {
  return <div>About</div>;
};
const PageNotFound: FunctionComponent = () => {
  return <div>404 Page not found</div>;
};
export default App;
