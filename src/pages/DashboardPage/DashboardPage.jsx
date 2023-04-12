import React from 'react';
import styles from './DashboardPage.module.css';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import Transactions from 'components/Transactions/Transactions';

function DashboardPage() {
  return (
    <div className={styles.dashboard}>
      <header>Header</header>
      <div className={styles.dashboard__content}>
        <div className={styles.dashboard__navigation}>
          <Navigation />
        </div>
        <div className={styles.dashboard__balance}>
          <Balance amount="24 000.00" />{' '}
        </div>

        <Transactions />
        <div>Currency</div>
      </div>
    </div>
  );
}

export default DashboardPage;
