import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isAuth, isRefreshing } = useAuth();
  const shouldRedirect = !isAuth && !isRefreshing;
return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;

};


