import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '..';
import { checkAnonymToken, checkAuth } from '../../services/checkAuth';
import { getDiscounts } from '../../store/discount/discount.slice';
import { useAppDispatch } from '../../hooks/redux-hooks';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  checkAnonymToken();
  checkAuth();
  useEffect(() => {
    dispatch(getDiscounts());
  }, [dispatch]);
  return <RouterProvider router={router} />;
};

export default App;
