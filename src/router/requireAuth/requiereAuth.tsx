import { Navigate, Outlet } from 'react-router-dom';
import { userAuth } from '../../hooks/user-auth';
import React from 'react';

const RequireAuth: React.FC = () => {
  const auth = userAuth();

  if (auth) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
export default RequireAuth;
