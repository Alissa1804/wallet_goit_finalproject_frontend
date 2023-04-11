import React from 'react';
import styles from './Transactions.module.css';

function Transactions() {
  return (
    <div className={styles.transactions}>
      <ul className={styles.transactions__list}>
        <li className={styles.transactions__item}>
          <div>
            <div>Date</div>
            <div>04.01.19</div>
          </div>
          <div>
            <div>Type</div>
            <div>-</div>
          </div>
          <div>
            <div>Category</div>
            <div>Other</div>
          </div>
          <div>
            <p>Comment</p>
            <div>Gift for your wife</div>
          </div>
          <div>
            <div>Sum</div>
            <div>300.00</div>
          </div>
          <button>Delete</button>
          <button>Edit</button>
        </li>
      </ul>
    </div>
  );
}

export default Transactions;
