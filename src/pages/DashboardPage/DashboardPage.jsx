import React from 'react';
import styles from './DashboardPage.module.css';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import Transactions from 'components/Transactions/Transactions';
import { AddTransactionBtn } from 'components/AddBtn/AddTransactionBtn'

function DashboardPage() {
  return (
    <div>
      <header>Header</header>
      <div className={styles.dashboard}>
        <Navigation />
        <Balance amount="24 000.00" />
        <Transactions />
        <div>Currency
           <AddTransactionBtn />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
