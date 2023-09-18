import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';
import React from 'react';
import { faker } from '@faker-js/faker';

// import { GraphData } from '@/utils/data';


ChartJS.register(ArcElement, Tooltip, Legend);
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
export const data = {
  labels: months,
  datasets: [
    {
      label: '# of Items',
      data: months.map(() => faker.datatype.number({ min: 0, max: 150000 })),
      backgroundColor: [
        'rgba(0, 128, 0, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(0, 128, 0, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Monthly Expenses (GHC)',
    },
  },
  // maintainAspectRatio: false,
  // indexAxis: "y",
  layout: {
    padding: {
      top: 10
    }
  },
};

export default function DoughnutChart() {
  return <Doughnut data={data} options={options} />;
}
