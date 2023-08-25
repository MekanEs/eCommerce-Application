import { Navigate, Outlet } from 'react-router-dom';
import { userAuth } from '../../hooks/user-auth';
import React from 'react';

const CheckAccountAuth: React.FC = () => {
  const auth = userAuth();

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default CheckAccountAuth;
