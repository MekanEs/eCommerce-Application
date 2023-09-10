import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '..';
import { checkAnonymToken } from '../../services/checkAuth';

const App: React.FC = () => {
  checkAnonymToken();
  return <RouterProvider router={router} />;
};

export default App;
