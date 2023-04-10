import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { Loader } from './Loader/Loader';
// import { Header } from './Header/header';
import { RegistrationPage } from "pages/RegistrationPage/RegistrationPage";

import { PublicRoute } from "HOCs/PublicRoute";

export const App = () => {
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
  );
};