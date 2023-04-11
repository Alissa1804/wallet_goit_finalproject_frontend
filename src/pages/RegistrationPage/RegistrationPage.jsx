import React from 'react';
import Media from 'react-media';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import frame from '../../images/RegistrationPage/frame-desktop.png';
import { Container } from 'components/Container/Container';
import styles from './RegistrationPage.module.css';

export const RegistrationPage = () => {
  return (
    <Container>
      <div className={styles.commonContainer}>
        <Media
          query="(min-width: 767px)"
          render={() => (
            <div className={styles.leftContainer}>
              <img className={styles.regImage} src={frame} alt="" />
              <h1 className={styles.title}>Finance App</h1>
            </div>
          )}
        />

        <div className={styles.rightContainer}>
          <RegistrationForm />
        </div>
      </div>
    </Container>
  );
};
