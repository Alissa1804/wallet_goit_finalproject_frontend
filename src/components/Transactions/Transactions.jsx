import React from 'react';
import styles from './Transactions.module.css';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

function Transactions() {
  return (
    <div className={styles.transactions}>
      <ul className={styles.transactions__list}>
        <li className={styles.transactions__item}>
          <div className={styles.transactions__row}>
            <div className={styles.transactions__th}>Date</div>
            <div className={styles.transactions__tb}>04.01.19</div>
          </div>
          <div className={styles.transactions__row}>
            <div className={styles.transactions__th}>Type</div>
            <div className={styles.transactions__tb}>-</div>
          </div>
          <div className={styles.transactions__row}>
            <div className={styles.transactions__th}>Category</div>
            <div className={styles.transactions__tb}>Other</div>
          </div>
          <div className={styles.transactions__row}>
            <div className={styles.transactions__th}>Comment</div>
            <div className={styles.transactions__tb}>Gift for your wife</div>
          </div>
          <div className={styles.transactions__row}>
            <div className={styles.transactions__th}>Sum</div>
            <div className={styles.transactions__red}>300.00</div>
          </div>
          <div className={styles.transactions__row}>
            <div>
              <button className={styles.transactions__btn_d}>Delete</button>
            </div>
            <div className={styles.transactions__button_edit}>
              <div>
                <ModeEditOutlineOutlinedIcon />
              </div>
              <button className={styles.transactions__btn_e}>Edit</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Transactions;
