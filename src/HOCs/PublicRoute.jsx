import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';


export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(selectToken);
  return token ? <Navigate to={redirectTo} /> : Component;
};