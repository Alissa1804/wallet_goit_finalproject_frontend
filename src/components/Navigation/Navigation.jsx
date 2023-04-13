import React from 'react';
import styles from './Navigation.module.css';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__item}>
        <HomeIcon />
      </div>
      <div className={styles.navigation__item}>
        <TimelineIcon />
      </div>
      <div className={styles.navigation__item}>
        <AttachMoneyIcon />
      </div>
    </div>
  );
}

export default Navigation;
