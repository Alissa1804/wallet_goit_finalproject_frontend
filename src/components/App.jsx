import { Loader } from './Loader/Loader';
import { Header } from './Header/header';
// import { fetchCurrentUser } from 'redux/auth/auth-operations';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { PrivateRoute } from 'HOCs/PrivateRoute';
// import { RestrictedRoute } from 'HOCs/RestrictedRoute';

// import { useAuth } from 'hooks/useAuth';

export const App = () => {

  //-----для авторизации-----
  // const dispatch = useDispatch();

  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(fetchCurrentUser());
  // }, [dispatch]);

  // return isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) : (
  //   <>
  return(
      <div>
        <Header />
        <Loader />
      </div>
    //<>
  );
};
