import { Doughnut } from 'react-chartjs-2';
import styles from './Chart.module.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

const ChartDoughnut = ({ categories, colors, expense }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: categories || [],
    datasets: [
      {
        label: '',
        data: categories ? categories.map((_, index) => 8 - index) : [1],
        backgroundColor:
          categories && categories.length > 0 ? colors : ['#24cca7'],

        borderWidth: 0,
        cutout: '68%',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    devicePixelRatio: 2,
  };

  return (
    <div className={styles.container}>
      {expense ? (
        <>
          <Doughnut data={data} options={options} />
          <p className={styles.expense}>₴ {expense}</p>
        </>
      ) : (
        <>
          <Doughnut data={data} options={options} />
          <p className={styles.expense}>No expenses</p>
        </>
      )}
    </div>
  );
};

export default ChartDoughnut;
