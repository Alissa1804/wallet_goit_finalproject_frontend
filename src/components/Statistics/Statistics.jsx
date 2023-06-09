import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {
  selectIsLoading,
  selectStatistics,
} from 'redux/finance/finance-selectors';
import { getStatistics } from 'redux/finance/finance-operations';
import ChartDoughnut from 'components/Chart/Chart';
import { DatePickers } from 'components/DatePicker/DatePicker';
import styles from './Statistics.module.css';
import { Loader } from 'components/Loader/Loader';

export const Statistics = () => {
  const colors = [
    '#FED057',
    '#FFD8D0',
    '#FD9498',
    '#C5BAFF',
    '#6E78E8',
    '#4A56E2',
    '#81E1FF',
    '#24CCA7',
    '#00AD84',
    '#784fca',
  ];
  const dispatch = useDispatch();
  const [selectedMonth, setSelectedMonth] = useState(moment().startOf('month'));
  const [selectedYear, setSelectedYear] = useState(moment().startOf('year'));

  const statistics = useSelector(selectStatistics);
  const isLoading = useSelector(selectIsLoading);
  const categories =
    statistics &&
    statistics.data[0]?.categories?.map(category => category.category);
  const expense = statistics?.data[0]?.expense || 0;
  const fetchStatistics = useCallback(() => {
    const year = parseInt(selectedYear.format('YYYY'), 10);
    const month = Number(selectedMonth.format('M'));
    dispatch(getStatistics({ month, year }));
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
        <ChartDoughnut
          categories={categories}
          colors={colors}
          expense={expense}
        />
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

        {statistics &&
        statistics.data[0].categories &&
        statistics.data[0].categories.length > 0 ? (
          <ul className={styles.table}>
            {' '}
            {isLoading && <Loader />}
            {statistics.data[0].categories.map((category, id) => (
              <li className={styles.category__item} key={id}>
                <span
                  className={styles.box}
                  style={{ backgroundColor: colors[id] }}
                ></span>
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
            <span className={styles.sumE}>
              {(statistics && statistics.data[0]?.expense) || 0}
            </span>
          </li>
          <li className={styles.totals__item}>
            <p className={styles.totals__title}>Income:</p>
            <span className={styles.sumI}>
              {(statistics && statistics.data[0]?.income) || 0}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
