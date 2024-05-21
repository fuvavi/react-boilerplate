import { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from './utils/token';

interface RequireAuthProps {
  children: ReactElement;
}

const RequireAuth = ({ children }: RequireAuthProps): ReactElement => {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
