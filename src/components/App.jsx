import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PrivateRoute } from 'HOCs/PrivateRoute';

import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import DashboardPage from 'pages/DashboardPage/DashboardPage';

import { PublicRoute } from 'HOCs/PublicRoute';
import StatisticsPage from 'pages/StatisticsPage/StatisticsPage';
import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute redirectTo="/home" component={<RegistrationPage />} />
          }
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/home" component={<LoginPage />} />}
        />

        <Route
          path="/home"
          element={
            <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
          }
        />
        <Route
          path="/statistics"
          element={
            <PrivateRoute redirectTo="/login" component={<StatisticsPage />} />
          }
        />
        <Route
          path="/currency"
          element={
            <PrivateRoute redirectTo="/login" component={<CurrencyPage />} />
          }
        />
      </Routes>
      <ToastContainer position="bottom-right" />
    </>
  );
};
