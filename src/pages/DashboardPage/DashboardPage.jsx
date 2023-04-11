import React from 'react';
import styles from './DashboardPage.module.css';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';

function DashboardPage() {
  return (
    <div>
      <header>Header</header>
      <div className={styles.dashboard}>
        <Navigation />
        <Balance amount="24 000.00" />
        <div>Transactions</div>
        <div>Currency</div>
      </div>
    </div>
  );
}

export default DashboardPage;
