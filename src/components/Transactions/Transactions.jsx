import React from 'react';
import styles from './Transactions.module.css';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { useDeviceSize } from 'hooks/useDeviceSize';
import { useState } from 'react';
import { useEffect, useCallback } from 'react';
import { selectToken } from 'redux/auth/auth-selectors';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { selectIsModalOpen } from 'redux/global/global-selectors';
import { toggleModalOpen, setModalType } from 'redux/global/global-slice';
import { ModalDelete } from 'components/ModalDelete/ModalDelete';
import { Loader } from 'components/Loader/Loader';

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector(selectToken);
  const isModalOpen = useSelector(selectIsModalOpen);
  const [id, setId] = useState(null);

  const dispatch = useDispatch();

  const handleDeleteClick = itemId => {
    dispatch(setModalType('delete'));
    dispatch(toggleModalOpen());
    setId(itemId);
  };
  
  const fetchTransactions = useCallback(async () => {
    setIsLoading(true); 
    try {
      const response = await axios(
        'https://walletproject.onrender.com/api/transactions',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTransactions(response.data.data);
      setIsLoading(false); 
    } catch (error) {
      console.error('Error fetching transactions:', error);
      setIsLoading(false); 
    }
  }, [token]);

  

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);


  const { deviceType } = useDeviceSize();
  if (deviceType === 'mobile') {
    return (
      <div className={styles.transactions}>
        {isLoading ? (
          <Loader />
        ) : transactions.length === 0 ? (
          <p
            className={styles.transactions__th}
            style={{ textAlign: 'center' }}
          >
            No transactions found
          </p>
        ) : (
          <ul className={styles.transactions__list}>
            {transactions.map(item => (
              <li
                className={`${styles.transactions__item} ${
                  item.type
                    ? styles.transactions__item__positive
                    : styles.transactions__item__negative
                }`}
                key={item._id}
              >
                <div className={styles.transactions__row}>
                  <div className={styles.transactions__th}>Date</div>
                  <div className={styles.transactions__tb}>
                    {moment(item.date).format('L')}
                  </div>
                </div>
                <div className={styles.transactions__row}>
                  <div className={styles.transactions__th}>Type</div>
                  <div className={styles.transactions__tb}>
                    {item.type ? '+' : '-'}
                  </div>
                </div>
                <div className={styles.transactions__row}>
                  <div className={styles.transactions__th}>Category</div>
                  <div className={styles.transactions__tb}>{item.category}</div>
                </div>
                <div className={styles.transactions__row}>
                  <div className={styles.transactions__th}>Comment</div>
                  <div className={styles.transactions__tb}>
                    {item.comment ?? '-'}
                  </div>
                </div>
                <div className={styles.transactions__row}>
                  <div className={styles.transactions__th}>Sum</div>
                  <div
                    className={
                      item.type
                        ? styles.transactions__green
                        : styles.transactions__red
                    }
                  >
                    {item.amount}
                  </div>
                </div>
                <div className={styles.transactions__row}>
                  <div>
                    <button
                      className={styles.transactions__btn_d}
                      onClick={() => handleDeleteClick(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                  <div className={styles.transactions__button_edit}>
                    <ModeEditOutlineOutlinedIcon fontSize="small" />
                    <button className={styles.transactions__btn_e}>Edit</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        {isModalOpen && <ModalDelete id={id} fetch={fetchTransactions} />}
      </div>
    );
  }
  return (
    <div className={styles.transactions}>
      {isLoading ? (
        <Loader />
      ) : transactions.length === 0 ? (
        <p className={styles.transactions__th} style={{ textAlign: 'center' }}>
          No transactions found.
        </p>
      ) : (
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
                <td className={styles.transactions__tbl_item}>
                  {item.category}
                </td>
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
                      onClick={() => handleDeleteClick(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isModalOpen && <ModalDelete id={id} fetch={fetchTransactions} />}
    </div>
  );
}

export default Transactions;
