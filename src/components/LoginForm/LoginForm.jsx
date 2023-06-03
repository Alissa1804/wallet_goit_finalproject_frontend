import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import styles from './LoginForm.module.css';

import logo from '../../images/logo.svg';
import { login } from 'redux/auth/auth-operations';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Enter the valid email')
      .required('The email field is required'),
    password: Yup.string().required('The password field is required'),
  });
  
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
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
              />
              <span
                onClick={handlePasswordVisibility}
                className={styles.password__visibility__toggle}
              >
                {showPassword ? <VisibilityOffIcon style={{ color: '#e0e0e0' }}/> : <VisibilityIcon style={{ color: '#e0e0e0' }}/>}
              </span>
            </div>

            <div className={styles.button__container}>
              <button type="submit" className={styles.main__button}>
                Log in
              </button>
              <Link to="/">
                <button
                  type="button"
                  className={styles.secondary__button}
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
