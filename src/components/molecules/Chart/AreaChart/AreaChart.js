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
      bottom: 20,
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
      enabled: true, // Enable tooltips
    },
  },
  scales: {
    x: {
      display: true, // Show X-axis
      grid: {
        display: false,
      },
      ticks: {
        color: '#666',
        font: {
          size: 12,
        },
      },
    },
    y: {
      display: true, // Show Y-axis
      grid: {
        display: false,
      },
      min: 0,
      max: 1000,
      ticks: {
        color: '#666',
        font: {
          size: 12,
        },
      },
    },
  },
  elements: {
    point: {
      radius: 3, // Show data points
      hoverRadius: 5,
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

// Smooth, organic curve data
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      fill: true,
      label: 'Revenue',
      data: [200, 350, 250, 450, 300, 600, 400, 750, 500, 850, 600, 700, 450, 800, 550, 900, 650, 550, 350, 250, 400, 600, 500, 750, 600, 800, 700, 650, 500, 300],
      borderColor: '#4AC4B4', // Teal color
      backgroundColor: 'rgba(74, 196, 180, 0.3)', // Light teal gradient
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

// Chart component
export default function AreaChart() {
  return (
    <div className={classes.chartContainer}>
      <Line options={options} data={data} />
    </div>
  );
}
