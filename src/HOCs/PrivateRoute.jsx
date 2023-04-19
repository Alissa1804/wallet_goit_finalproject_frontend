import { Navigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operations';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/login',
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  const token = useSelector(selectToken);
  const shouldRedirect = !token;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
