import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/app/app';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { registerUser, loginUser } from './server';

loginUser();
registerUser();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
