import React from 'react';
import styles from './Navigation.module.css';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__item}>
        <div className={styles.navigation__icon}>
          <HomeIcon fontSize="inherit" />
        </div>
        <div className={styles.navigation__text}>Home</div>
      </div>
      <div className={styles.navigation__item}>
        <div className={styles.navigation__icon}>
          <TimelineIcon fontSize="inherit" />
        </div>

        <div className={styles.navigation__text}>Statistics</div>
      </div>
      <div className={styles.navigation__item}>
        <div className={styles.navigation__icon}>
          <AttachMoneyIcon fontSize="inherit" />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
