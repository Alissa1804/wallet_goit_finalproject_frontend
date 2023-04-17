import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import styles from './DatePicker.module.css';
import moment from 'moment';

export const DatePickers = ({ onMonthChange, onYearChange }) => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const currentMonth = moment().format('MMMM');
  const currentYear = moment().format('YYYY');
  return (
    <div>
      <Datetime
        id="month-picker"
        value={selectedMonth}
        onChange={date => {
          setSelectedMonth(date);
          onMonthChange(date);
        }}
        dateFormat="MMMM"
        viewMode="months"
        timeFormat=""
        closeOnSelect={true}
        inputProps={{
          placeholder: currentMonth,
          className: `${styles.picker__input} ${styles.module}`,
        }}
        className={`${styles.picker} ${styles.module} ${styles.monthpicker}`}
      />
      <Datetime
        id="year-picker"
        value={selectedYear}
        onChange={date => {
          setSelectedYear(date);
          onYearChange(date);
        }}
        dateFormat="YYYY"
        viewMode="years"
        timeFormat=""
        closeOnSelect={true}
        inputProps={{
          placeholder: currentYear,
          className: `${styles.picker__input} ${styles.module}`,
        }}
        className={`${styles.picker} ${styles.module}`}
      />
    </div>
  );
};
