import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '..';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { loginUser } from '../../store/user/auth.slice';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loginUser({ email: 'wdwd@gmail.com', password: '1111rss' }));
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
