import React from 'react';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__item}>H</div>
      <div className={styles.navigation__item}>S</div>
      <div className={styles.navigation__item}>$</div>
    </div>
  );
}

export default Navigation;
