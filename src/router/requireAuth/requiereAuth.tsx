import { Navigate, Outlet } from 'react-router-dom';
import { userAuth } from '../../hooks/user-auth';

const RequireAuth: React.FC = () => {
  const auth = userAuth();

  if (auth) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
export default RequireAuth;
