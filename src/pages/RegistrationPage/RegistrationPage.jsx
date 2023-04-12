import React from 'react';
import Media from 'react-media';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import frame from '../../images/RegistrationPage/Desktop/frame-desktop.png';
// import { Container } from 'components/Container/Container';
import styles from './RegistrationPage.module.css';
import { AddTransactionBtn } from 'components/AddBtn/AddTransactionBtn'

export const RegistrationPage = () => {
  return (
    <div className={styles.commonContainer}>
      {/* <Container> */}
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
        <RegistrationForm />
        
          <AddTransactionBtn />
        </div>
      {/* </Container> */}
    </div>
  );
};
