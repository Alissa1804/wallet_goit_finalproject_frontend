import React from 'react';
import styles from './DashboardLayout.module.css';
import { useDeviceSize } from 'hooks/useDeviceSize';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';
import { Header } from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import { useLocation } from 'react-router-dom';

function DashboardLayout({ children }) {
  const { deviceType } = useDeviceSize();
  const location = useLocation();
  if (deviceType === 'mobile') {
    return (
      <div className={styles.backWrapper}>
        <div className={styles.dashboard}>
          <ModalLogout />
          <Header />
          <div className={styles.dashboard__content}>
            <div className={styles.dashboard__navigation}>
              <Navigation />
            </div>
            {location.pathname === '/home' && (
              <div className={styles.dashboard__balance}>
                <Balance />
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.backWrapper}>
      <div className={styles.dashboard}>
        <ModalLogout />
        <Header />
        <div className={styles.dashboard__content}>
          <div className={styles.dashboard__left}>
            <div className={styles.dashboard__navigation}>
              <Navigation />
            </div>
            {deviceType === 'mobile' ? (
              location.pathname === '/home' && (
                <div className={styles.dashboard__balance}>
                  <Balance />
                </div>
              )
            ) : (
              <div className={styles.dashboard__balance}>
                <Balance />
              </div>
            )}
            {deviceType === 'descktop' && (
              <div className={styles.dashboard__currency}>
                <Currency />
              </div>
            )}
          </div>
          <div className={styles.dashboard__right}>
            {deviceType === 'descktop' ? (
              children
            ) : (
              <div className={styles.dashboard__currency}>
                <Currency />
              </div>
            )}
          </div>
          {deviceType !== 'descktop' && children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
