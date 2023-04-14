import React from 'react';
import styles from './DashboardPage.module.css';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import Transactions from 'components/Transactions/Transactions';
import { Header } from '../../components/Header/Header';
import Currency from '../../components/Currency/Currency';
import { useDeviceSize } from 'hooks/useDeviceSize';
import { ModalLogout } from '../../components/ModalLogout/ModalLogout';
import { AddTransactionBtn } from 'components/AddBtn/AddTransactionBtn';
import { Statistics } from '../../components/Statistics/Statistics';

function DashboardPage() {
  const { deviceType } = useDeviceSize();

  if (deviceType === 'mobile') {
  }

  return (
    <div className={styles.dashboard}>
      <ModalLogout />
      <Header />
      <div className={styles.dashboard__content}>
        <div className={styles.dashboard__left}>
          <div className={styles.dashboard__navigation}>
            <Navigation />
          </div>
          <div className={styles.dashboard__balance}>
            <Balance amount="24 000.00" />{' '}
          </div>
          {deviceType === 'descktop' && (
            <div className={styles.dashboard__currency}>
              <Currency />
            </div>
          )}
        </div>
        <div className={styles.dashboard__right}>
          {deviceType === 'descktop' ? (
            <>
              <Transactions />
              <Statistics />
            </>
          ) : (
            <div className={styles.dashboard__currency}>
              <Currency />
            </div>
          )}
        </div>
        {deviceType !== 'descktop' && (
          <>
            <Transactions />
            <Statistics />
          </>
        )}

        <AddTransactionBtn />
      </div>
    </div>
  );
}

export default DashboardPage;
