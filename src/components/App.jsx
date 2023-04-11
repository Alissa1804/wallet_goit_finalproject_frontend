feature/add-redux-auth
//import { Loader } from './Loader/Loader';
//import { Header } from './Header/header';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { fetchCurrentUser } from 'redux/auth/auth-operations';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { PrivateRoute } from 'HOCs/PrivateRoute';
// import { RestrictedRoute } from 'HOCs/RestrictedRoute';
import { RegistrationPage } from "pages/RegistrationPage/RegistrationPage";

import { PublicRoute } from "HOCs/PublicRoute";

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
 return (
    // <div>
    //   <Header />
    //   <Loader />
    // </div>
    <>
    <Routes>
    <Route path="/" element={<PublicRoute redirectTo='/' component={<RegistrationPage/>}/>} />
  </Routes>
  <ToastContainer position='bottom-right' />
    </>
    main
  );
};
