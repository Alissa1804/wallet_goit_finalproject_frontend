import React from 'react';
import styles from './Balance.module.css';

function Balance({ amount }) {
  return (
    <div className={styles.balance}>
      <div className={styles.balance__text}>Your balance</div>
      <div className={styles.balance__amount}>
        <span className={styles.balance__currency}>₴</span> {amount}{' '}
      </div>
    </div>
  );
}

export default Balance;
