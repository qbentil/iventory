import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';
import React from 'react';
import { faker } from '@faker-js/faker';

// import { GraphData } from '@/utils/data';


ChartJS.register(ArcElement, Tooltip, Legend);
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

const DoughnutChart = ({ data }: { data: any }) => {
  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
