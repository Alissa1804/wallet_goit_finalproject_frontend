import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import { selectIsAuth } from '../redux/auth/auth-selectors';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/',
  ...rest
}) => {
  const isAuth = useSelector(selectIsAuth);
  const Wrapper = props => <Component {...props} />;
  
  return (
    <Route
      {...rest}
      render={props =>
        (isAuth !== null && isAuth !== undefined) ? <Wrapper {...props} /> : <Navigate to={redirectTo} />
      }
    />
  );
};

