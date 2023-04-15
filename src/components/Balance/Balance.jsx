import React, { useEffect, useState } from 'react';
import styles from './Balance.module.css';
import { getBalance } from './getBalance';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

function Balance() {
  const [balance, setBalance] = useState(0);
  const token = useSelector(selectToken);

  async function fetchBalance() {
    const data = await getBalance(token);
    setBalance(data);
  }
  useEffect(() => {
    fetchBalance();
  });

  return (
    <div className={styles.balance}>
      <div className={styles.balance__text}>Your balance</div>
      <div className={styles.balance__amount}>
        <span className={styles.balance__currency}>₴</span> {balance}{' '}
      </div>
    </div>
  );
}

export default Balance;
