import ChartDoughnut from 'components/Chart/Chart';
import styles from './Statistics.module.css';

export const Statistics = () => {
  return (
    <>
      <div className={styles.statistic__container}>
        <div className={styles.container__left}>
          <h3 className={styles.s__title}>Statistics</h3>
          <ChartDoughnut />
        </div>
        <div className={styles.container__right}>
          <ul className={styles.title}>
            <li>Category</li>
            <li>Sum</li>
          </ul>
          <p className={styles.category__item}>
            You don't have any transactions for this month
          </p>
          <ul className={styles.table}>
            <li className={styles.category__item}>
              <span className={styles.box}></span>
              <p>Category</p>
              <p className={styles.total}>0.00</p>
            </li>
            <li className={styles.category__item}>
              <span className={styles.box}></span>
              <p>Category</p>
              <p className={styles.total}>0.00</p>
            </li>
          </ul>
          <ul className={styles.totals__sum}>
            <li className={styles.totals__item}>
              <p className={styles.totals__title}>Expenses:</p>{' '}
              <span className={styles.sumE}>0</span>
            </li>
            <li className={styles.totals__item}>
              <p className={styles.totals__title}>Income:</p>
              <span className={styles.sumI}>0</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
