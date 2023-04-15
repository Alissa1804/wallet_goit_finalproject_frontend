import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PrivateRoute } from 'HOCs/PrivateRoute';

import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import DashboardPage from 'pages/DashboardPage/DashboardPage';

import { PublicRoute } from 'HOCs/PublicRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute redirectTo="/" component={<RegistrationPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/dashboard" component={<LoginPage />} />
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute redirectTo="/" component={<DashboardPage />} />
          }
        />
      </Routes>
      <ToastContainer position="bottom-right" />
    </>
  );
};
