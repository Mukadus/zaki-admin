'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import classes from './AreaChart.module.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// Chart options for minimalist design
const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      right: 20,
      bottom: 0,
    },
  },
  animation: {
    duration: 1000,
    easing: 'easeInOutQuart',
  },
  plugins: {
    legend: {
      display: false, // Hide legend for minimalist look
    },
    title: {
      display: false, // Hide title
    },
    tooltip: {
      enabled: false, // Disable tooltips for clean look
    },
  },
  scales: {
    x: {
      display: false, // Hide X-axis
      grid: {
        display: false,
      },
    },
    y: {
      display: false, // Hide Y-axis
      grid: {
        display: false,
      },
      min: 0,
      max: 1000,
    },
  },
  elements: {
    point: {
      radius: 0, // Hide data points
      hoverRadius: 0,
    },
    line: {
      tension: 0.4, // Smooth curves
      borderWidth: 2,
    },
  },
  interaction: {
    intersect: false,
    mode: 'index',
  },
};

// Chart component
export default function AreaChart({ data = [] }) {
  const chartData = {
    labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    datasets: [
      {
        fill: true,
        label: '',
        data: data,
        borderColor: '#4AC4B4', // Teal color
        backgroundColor: 'rgba(74, 196, 180, 0.3)', // Light teal gradient
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className={classes.chartContainer}>
      <Line options={options} data={chartData} />
    </div>
  );
}
