import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { selectStatistics } from 'redux/finance/finance-selectors';
import { getStatistics } from 'redux/finance/finance-operations';
import ChartDoughnut from 'components/Chart/Chart';
import { DatePickers } from 'components/DatePicker/DatePicker';
import styles from './Statistics.module.css';

export const Statistics = () => {
  const dispatch = useDispatch();
  const [selectedMonth, setSelectedMonth] = useState(moment().startOf('month'));
  const [selectedYear, setSelectedYear] = useState(moment().startOf('year'));

  const statistics = useSelector(selectStatistics);

  const fetchStatistics = useCallback(() => {
    const year = selectedYear.format('YYYY');
    dispatch(getStatistics({ month: selectedMonth.month() + 1, year }));
  }, [dispatch, selectedMonth, selectedYear]);

  useEffect(() => {
    fetchStatistics();
  }, [fetchStatistics]);

  const handleMonthChange = date => {
    setSelectedMonth(date.startOf('month'));
  };

  const handleYearChange = date => {
    setSelectedYear(date.startOf('year'));
  };

  return (
    <div className={styles.statistic__container}>
      <div className={styles.container__left}>
        <h3 className={styles.s__title}>Statistics</h3>
        <ChartDoughnut />
      </div>
      <div className={styles.container__right}>
        <div className={styles.pickers__container}>
          <DatePickers
            onMonthChange={handleMonthChange}
            onYearChange={handleYearChange}
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
          />
        </div>
        <ul className={styles.title}>
          <li>Category</li>
          <li>Sum</li>
        </ul>
        {statistics ? (
          <ul className={styles.table}>
            {statistics.map((category, id) => (
              <li className={styles.category__item} key={id}>
                <span className={styles.box}></span>
                <p>{category.category}</p>
                <p className={styles.total}>{category.total}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.category__item}>
            You don't have any transactions for this month
          </p>
        )}
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
  );
};
