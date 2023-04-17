import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

import styles from './LoginForm.module.css';

import logo from '../../images/logo.svg';
import { login } from 'redux/auth/auth-operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Enter the valid email')
      .required('The email field is required'),
    password: Yup.string().required('The password field is required'),
  });

  const handleSubmit = ({ email, password }) => {
    dispatch(login({ email, password }));
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
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
              />
            </div>
    
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.mainButton}>
                Log in
              </button>
              <Link to="/">
                <button
                  type="button"
                  className={styles.secondaryButton}
                  disabled={!isValid && !dirty}
                >
                  Register
                </button>
              </Link>

            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
