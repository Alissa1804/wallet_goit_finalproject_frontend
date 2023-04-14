import React from 'react';
import styles from './Transactions.module.css';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { useDeviceSize } from 'hooks/useDeviceSize';

function Transactions() {
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
          <tr className={styles.transactions__tbl_string}>
            <td className={styles.transactions__tbl_item}>04.01.19</td>
            <td className={styles.transactions__tbl_item}>-</td>
            <td className={styles.transactions__tbl_item}>Other</td>
            <td className={styles.transactions__tbl_item}>
              Gift for your wife
            </td>
            <td className={styles.transactions__tbl_item}>
              <div className={styles.transactions__red}>300.00</div>
            </td>
            <td className={styles.transactions__tbl_item}>
              <div className={styles.transactions__tbl_buttons}>
                <button className={styles.transactions__tbl_btn_edit}>
                  <ModeEditOutlineOutlinedIcon fontSize="inherit" />
                </button>
                <button className={styles.transactions__tbl_btn_delete}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr className={styles.transactions__tbl_string}>
            <td className={styles.transactions__tbl_item}>05.01.19</td>
            <td className={styles.transactions__tbl_item}>+</td>
            <td className={styles.transactions__tbl_item}>Income</td>
            <td className={styles.transactions__tbl_item}>January bonus</td>
            <td className={styles.transactions__tbl_item}>
              <div className={styles.transactions__green}>8 000.00</div>
            </td>
            <td className={styles.transactions__tbl_item}>
              <div className={styles.transactions__tbl_buttons}>
                <button className={styles.transactions__tbl_btn_edit}>
                  <ModeEditOutlineOutlinedIcon fontSize="inherit" />
                </button>
                <button className={styles.transactions__tbl_btn_delete}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr className={styles.transactions__tbl_string}>
            <td className={styles.transactions__tbl_item}>07.01.19</td>
            <td className={styles.transactions__tbl_item}>-</td>
            <td className={styles.transactions__tbl_item}>Car</td>
            <td className={styles.transactions__tbl_item}>Oil</td>
            <td className={styles.transactions__tbl_item}>
              <div className={styles.transactions__red}>1000.00</div>
            </td>
            <td className={styles.transactions__tbl_item}>
              <div className={styles.transactions__tbl_buttons}>
                <button className={styles.transactions__tbl_btn_edit}>
                  <ModeEditOutlineOutlinedIcon fontSize="inherit" />
                </button>
                <button className={styles.transactions__tbl_btn_delete}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr className={styles.transactions__tbl_string}>
            <td className={styles.transactions__tbl_item}>07.01.19</td>
            <td className={styles.transactions__tbl_item}>-</td>
            <td className={styles.transactions__tbl_item}>Products</td>
            <td className={styles.transactions__tbl_item}>
              Vegetables for the week
            </td>
            <td className={styles.transactions__tbl_item}>
              <div className={styles.transactions__red}>280.00</div>
            </td>
            <td className={styles.transactions__tbl_item}>
              <div className={styles.transactions__tbl_buttons}>
                <button className={styles.transactions__tbl_btn_edit}>
                  <ModeEditOutlineOutlinedIcon fontSize="inherit" />
                </button>
                <button className={styles.transactions__tbl_btn_delete}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr className={styles.transactions__tbl_string}>
            <td className={styles.transactions__tbl_item}>07.01.19</td>
            <td className={styles.transactions__tbl_item}>+</td>
            <td className={styles.transactions__tbl_item}>Income</td>
            <td className={styles.transactions__tbl_item}>Gift</td>
            <td className={styles.transactions__tbl_item}>
              <div className={styles.transactions__green}>1 000.00</div>
            </td>
            <td className={styles.transactions__tbl_item}>
              <div className={styles.transactions__tbl_buttons}>
                <button className={styles.transactions__tbl_btn_edit}>
                  <ModeEditOutlineOutlinedIcon fontSize="inherit" />
                </button>
                <button className={styles.transactions__tbl_btn_delete}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
