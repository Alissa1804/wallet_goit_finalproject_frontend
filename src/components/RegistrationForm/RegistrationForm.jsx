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

import styles from './RegistrationForm.module.css';

import logo from '../../images/logo.svg';
import { register } from 'redux/auth/auth-operations';
import  {PasswordStrengthMeter}  from '../PasswordStrengthMeter/PasswordStrengthMeter';

export const RegistrationForm = () => {
  const [password, setPassword] = useState('');
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
        errors
      }) => (
        <div className={styles.containerForForm}>
        <Form className={styles.form}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} alt="Logo" src={logo} />
            <h1 className={styles.title}>Wallet</h1>
          </div>
          <div className={styles.inputContainer}>
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
              className={styles.inputIcon}
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
          <div className={styles.inputContainer}>
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
              className={styles.inputIcon}
              style={{ color: '#e0e0e0' }}
            />
            <input
              className={styles.input}
              type="text"
              name="password"
              placeholder="Password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              onInput={e => setPassword(e.target.value)}
            />
            <PasswordStrengthMeter password={password} />
          </div>
          <div className={styles.inputContainer}>
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
              className={styles.inputIcon}
              style={{ color: '#e0e0e0' }}
            />
            <input
              className={styles.input}
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className={styles.inputContainer}>
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
              className={styles.inputIcon}
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
          <div className={styles.buttonContainer}>
            <button
              type="submit"
              className={styles.mainButton}
              disabled={!isValid && !dirty}
            >
              Register
            </button>
            <Link to="/login">
                <button type="button" className={styles.secondaryButton}>Log in</button>
              </Link>
          </div>
        </Form>
      </div>
      )}
    </Formik>
  );
};
