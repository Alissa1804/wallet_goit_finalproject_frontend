import React, { useEffect, useCallback } from 'react';
import styles from './Balance.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { selectCurrentUser } from 'redux/user/user-selectors';
import { getCurrentUser } from 'redux/user/user-operations';

function Balance() {
  const user = useSelector(selectCurrentUser);
  const balance = user.balance;
  const dispatch = useDispatch();

  const token = useSelector(selectToken);

  const fetchCurrentUser = useCallback(async () => {
    dispatch(getCurrentUser({ token }));
  }, [token, dispatch]);

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

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
