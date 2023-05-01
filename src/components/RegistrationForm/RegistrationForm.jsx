import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import styles from './RegistrationForm.module.css';

import logo from '../../images/logo.svg';
import { register } from 'redux/auth/auth-operations';
import { PasswordStrengthMeter } from '../PasswordStrengthMeter/PasswordStrengthMeter';

export const RegistrationForm = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Enter the valid email')
      .required('The email field is required'),
    password: Yup.string()
      .min(6, 'The password must be minimum six symbols')
      .max(12, 'The password should not be more than 12 symbols')
      .required('The password field is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm your password'),
    name: Yup.string()
      .min(1, 'The name must be consist of at least 1 symbol')
      .max(12, 'The name should not be more than 12 symbols')
      .required('Enter you first name'),
  });

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = ({ name, email, password }) => {
    dispatch(register({ name, email, password }));
    navigate('/login');
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnBlur
    >
      {({
        handleChange,
        handleBlur,
        touched,
        isValid,
        dirty,
        values,
        errors,
      }) => (
        <div className={styles.form__container}>
          <Form className={styles.form}>
            <div className={styles.logo__container}>
              <img className={styles.logo} alt="Logo" src={logo} />
              <h1 className={styles.title}>Wallet</h1>
            </div>
            <div className={styles.input__container}>
              {touched.email && errors.email ? (
                <p
                  style={{
                    color: '#ff6596',
                    position: 'absolute',
                    bottom: '-30px',
                    left: '0',
                    fontFamily: 'Poppins',
                    fontSize: '13px',
                  }}
                >
                  {errors.email}
                </p>
              ) : null}

              <EmailIcon
                className={styles.input__icon}
                style={{ color: '#e0e0e0' }}
              />
              <input
                className={styles.input}
                type="text"
                name="email"
                id="email"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className={styles.input__container}>
              {touched.password && errors.password ? (
                <p
                  style={{
                    color: '#ff6596',
                    position: 'absolute',
                    bottom: '-30px',
                    left: '0',
                    fontFamily: 'Poppins',
                    fontSize: '13px',
                  }}
                >
                  {errors.password}
                </p>
              ) : null}

              <LockIcon
                className={styles.input__icon}
                style={{ color: '#e0e0e0' }}
              />
              <input
                className={styles.input}
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                onInput={e => setPassword(e.target.value)}
              />
              <span
                onClick={handlePasswordVisibility}
                className={styles.password__visibility__toggle}
              >
                {showPassword ? (
                  <VisibilityOffIcon style={{ color: '#e0e0e0' }} />
                ) : (
                  <VisibilityIcon style={{ color: '#e0e0e0' }} />
                )}
              </span>
              <PasswordStrengthMeter password={password} />
            </div>
            <div className={styles.input__container}>
              {touched.confirmPassword && errors.confirmPassword ? (
                <p
                  style={{
                    color: '#ff6596',
                    position: 'absolute',
                    bottom: '-30px',
                    left: '0',
                    fontFamily: 'Poppins',
                    fontSize: '13px',
                  }}
                >
                  {errors.confirmPassword}
                </p>
              ) : null}

              <LockIcon
                className={styles.input__icon}
                style={{ color: '#e0e0e0' }}
              />
              <input
                className={styles.input}
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className={styles.input__container}>
              {touched.name && errors.name ? (
                <p
                  style={{
                    color: '#ff6596',
                    position: 'absolute',
                    bottom: '-30px',
                    left: '0',
                    fontFamily: 'Poppins',
                    fontSize: '13px',
                  }}
                >
                  {errors.name}
                </p>
              ) : null}

              <AccountBoxIcon
                className={styles.input__icon}
                style={{ color: '#e0e0e0' }}
              />
              <input
                className={styles.input}
                type="text"
                name="name"
                id="name"
                placeholder="First name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className={styles.button__container}>
              <button
                type="submit"
                className={styles.main__button}
                disabled={!isValid && !dirty}
              >
                Register
              </button>
              <Link to="/login">
                <button type="button" className={styles.secondary__button}>
                  Log in
                </button>
              </Link>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
