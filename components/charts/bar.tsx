import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { BarGraphData } from '@/utils/data';
import React from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

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


export default function BarChart() {
    return <Bar options={options} data={BarGraphData} />;
}
