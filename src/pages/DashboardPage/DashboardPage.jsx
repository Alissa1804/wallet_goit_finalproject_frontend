import React from 'react';
import styles from './DashboardPage.module.css';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import Transactions from 'components/Transactions/Transactions';
import { Header } from '../../components/Header/Header';
import { ModalLogout } from '../../components/ModalLogout/ModalLogout';
import { AddTransactionBtn } from 'components/AddBtn/AddTransactionBtn'

function DashboardPage() {
  return (
    <div className={styles.dashboard}>
      <ModalLogout />
      <Header />
      <div className={styles.dashboard__content}>
        <div className={styles.dashboard__navigation}>
          <Navigation />
        </div>
        <div className={styles.dashboard__balance}>
          <Balance amount="24 000.00" />{' '}
        </div>
        <Transactions />
        <div>Currency
           <AddTransactionBtn />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
