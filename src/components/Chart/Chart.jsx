import { Doughnut } from 'react-chartjs-2';
import styles from './Chart.module.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

const ChartDoughnut = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [18, 15, 14, 7, 8, 10, 11, 12, 19, 13],
        backgroundColor: [
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
        ],

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
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ChartDoughnut;
