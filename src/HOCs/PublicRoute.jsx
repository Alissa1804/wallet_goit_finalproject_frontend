import { useSelector } from 'react-redux';
//import { selectToken } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/auth-selectors';

// export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
//   const token = useSelector(selectToken);
//   console.log("public");
//   return !token ? <Navigate to={redirectTo} /> : Component;
// };
//export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
//  const isAuth = useSelector(selectIsAuth);
//  const shouldRedirect = isAuth;
//  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
//};

export const PublicRoute = ({ component: Component, redirectTo = '/home' }) => {
  const isAuth = useSelector(selectIsAuth);
  const shouldRedirect = isAuth;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
