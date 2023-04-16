import React, { useEffect, useState } from 'react';
import styles from './Balance.module.css';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import axios from 'axios';

function Balance() {
  const [balance, setBalance] = useState(0);
  const token = useSelector(selectToken);

  useEffect(() => {
    async function fetch() {
      const response = await axios(
        'https://walletproject.onrender.com/api/balance',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBalance(response.data.balance);
    }

    fetch();
  }, [token]);

  return (
    <div className={styles.balance}>
      <div className={styles.balance__text}>Your balance</div>
      <div className={styles.balance__amount}>
        <span className={styles.balance__currency}>₴</span> {balance}
      </div>
    </div>
  );
}

export default Balance;
