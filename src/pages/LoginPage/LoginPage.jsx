import React from 'react';
import Media from 'react-media';
import { LoginForm } from 'components/LoginForm/LoginForm';
import frame from '../../images/LoginPage/Desktop/frame-login-desktop.png';
// import { Container } from 'components/Container/Container';
import styles from './LoginPage.module.css';

export const LoginPage = () => {
  return (
    <div className={styles.commonContainer}>
          {/* <Container>  */}
        <Media
          query="(min-width: 767px)"
          render={() => (
            <div className={styles.logoContainer}>
              <img className={styles.regImage} src={frame} alt="" />
              <h1 className={styles.title}>Finance App</h1>
            </div>
          )}
        />
        <div className={styles.formContainer}>
          <LoginForm/>
        </div>
          {/* </Container>  */}
    </div>

  );
};