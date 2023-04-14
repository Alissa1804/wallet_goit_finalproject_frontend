import React, { useEffect, useState } from 'react';
import styles from './Currency.module.css';
import { getCurrency } from './getCurrency';

function Currency() {
  const [currencyData, setCurrencyData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await getCurrency();
      setCurrencyData(data);
    }
    fetchData();
  }, []);

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
            <td className={styles.currency__tbl_item}>5.5</td>
            <td className={styles.currency__tbl_item}>5.5</td>
          </tr>
          <tr>
            <td className={styles.currency__tbl_item}>EUR</td>
            <td className={styles.currency__tbl_item}>5.6</td>
            <td className={styles.currency__tbl_item}>5.6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  if (!currencyData) {
    return <div>Loading...</div>;
  }

  const eurBuy = currencyData.eur.buy;
  const eurSale = currencyData.eur.sale;
  const USDSale = currencyData.usd.sale;
  const USDBuy = currencyData.usd.buy;

  // return (
  //   <div className={styles.currency}>
  //     <table className={styles.currency__tbl}>
  //       <thead className={styles.currency__thead}>
  //         <tr>
  //           <th className={styles.currency__tbl_title}>Currency</th>
  //           <th className={styles.currency__tbl_title}>Purchase</th>
  //           <th className={styles.currency__tbl_title}>Sale</th>
  //         </tr>
  //       </thead>
  //       <tbody className={styles.currency__tbody}>
  //         <tr>
  //           <td className={styles.currency__tbl_item}>USD</td>
  //           <td className={styles.currency__tbl_item}>{USDBuy}</td>
  //           <td className={styles.currency__tbl_item}>{USDSale}</td>
  //         </tr>
  //         <tr>
  //           <td className={styles.currency__tbl_item}>EUR</td>
  //           <td className={styles.currency__tbl_item}>{eurBuy}</td>
  //           <td className={styles.currency__tbl_item}>{eurSale}</td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   </div>
  // );
}

export default Currency;
