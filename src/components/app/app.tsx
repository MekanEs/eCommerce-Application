import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '..';
import { checkAnonymToken, checkAuth } from '../../services/checkAuth';

const App: React.FC = () => {
  checkAnonymToken();
  checkAuth();
  return <RouterProvider router={router} />;
};

export default App;
