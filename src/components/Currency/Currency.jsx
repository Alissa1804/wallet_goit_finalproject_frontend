import React from 'react';
import styles from './Currency.module.css';

function Currency() {
  return (
    <div className={styles.currency}>
      <table className={styles.currency__tbl}>
        <thead className={styles.currency__thead}>
          <tr>
            <th className={styles.currency__tbl_title}>Currency</th>
            <th className={styles.currency__tbl_title}>Purchase</th>
            <th className={styles.currency__tbl_title}>Sale</th>
          </tr>
        </thead>
        <tbody className={styles.currency__tbody}>
          <tr>
            <td className={styles.currency__tbl_item}>USD</td>
            <td className={styles.currency__tbl_item}>27.55</td>
            <td className={styles.currency__tbl_item}>27.65</td>
          </tr>
          <tr>
            <td className={styles.currency__tbl_item}>EUR</td>
            <td className={styles.currency__tbl_item}>30.00</td>
            <td className={styles.currency__tbl_item}>30.10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Currency;
