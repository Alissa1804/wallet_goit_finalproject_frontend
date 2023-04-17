import React from 'react';
import styles from './Transactions.module.css';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { useDeviceSize } from 'hooks/useDeviceSize';
import { useState } from 'react';
import { useEffect } from 'react';
import { selectToken } from 'redux/auth/auth-selectors';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { selectIsModalOpen } from 'redux/global/global-selectors';
import { toggleModalOpen, setModalType } from 'redux/global/global-slice';
// import { deleteTransaction } from 'redux/transactions/transactions-operations';
import { ModalDelete } from 'components/ModalDelete/ModalDelete';

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const token = useSelector(selectToken);
  const isModalOpen = useSelector(selectIsModalOpen);

  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(setModalType('delete'));
    dispatch(toggleModalOpen());
  };

  useEffect(() => {
    async function fetch() {
      const response = await axios(
        'https://walletproject.onrender.com/api/transactions',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTransactions(response.data.data);
    }

    fetch();
  }, [token]);

  const { deviceType } = useDeviceSize();
  if (deviceType === 'mobile') {
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
                <ModeEditOutlineOutlinedIcon fontSize="small" />
                <button className={styles.transactions__btn_e}>Edit</button>
              </div>
            </div>
          </li>

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
                <ModeEditOutlineOutlinedIcon fontSize="small" />
                <button className={styles.transactions__btn_e}>Edit</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className={styles.transactions}>
      <table className={styles.transactions__tbl}>
        <thead className={styles.transactions__thead}>
          <tr className={styles.transactions__thr}>
            <th className={styles.transactions__tbl_title}>Date</th>
            <th className={styles.transactions__tbl_title}>Type</th>
            <th className={styles.transactions__tbl_title}>Category</th>
            <th className={styles.transactions__tbl_title}>Comment</th>
            <th className={styles.transactions__tbl_title}>Sum</th>
            <th className={styles.transactions__tbl_title}></th>
          </tr>
        </thead>
        <tbody className={styles.transactions__tbody}>
          {transactions.map(item => (
            <tr className={styles.transactions__tbl_string} key={item._id}>
              <td className={styles.transactions__tbl_item}>
                {moment(item.date).format('L')}
              </td>
              <td className={styles.transactions__tbl_item}>
                {item.type ? '+' : '-'}
              </td>
              <td className={styles.transactions__tbl_item}>{item.category}</td>
              <td className={styles.transactions__tbl_item}>
                {item.comment ?? '-'}
              </td>
              <td className={styles.transactions__tbl_item}>
                <div
                  className={
                    item.type
                      ? styles.transactions__green
                      : styles.transactions__red
                  }
                >
                  {item.amount}
                </div>
              </td>
              <td className={styles.transactions__tbl_item}>
                <div className={styles.transactions__tbl_buttons}>
                  <button className={styles.transactions__tbl_btn_edit}>
                    <ModeEditOutlineOutlinedIcon fontSize="inherit" />
                  </button>
                  <button
                    className={styles.transactions__tbl_btn_delete}
                    onClick={handleDeleteClick} 
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && <ModalDelete />}
    </div>
  );
}

export default Transactions;
