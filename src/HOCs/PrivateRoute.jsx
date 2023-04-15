import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(selectToken);
  const shouldRedirect = !token;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
