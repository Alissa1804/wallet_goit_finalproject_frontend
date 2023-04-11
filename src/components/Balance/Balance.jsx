import React from 'react';
import styles from './Balance.module.css';

function Balance({ amount }) {
  return (
    <div className={styles.balance}>
      <div className={styles.balance__text}>Your balance</div>
      <div className={styles.balance__amount}>₴ {amount} </div>
    </div>
  );
}

export default Balance;
