'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import classes from './SignupChart.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    },
  },
  plugins: {
    legend: {
      display: false, // Hide legend for clean look
    },
    title: {
      display: false, // Hide title
    },
    tooltip: {
      enabled: true,
      backgroundColor: '#1a1a1a',
      titleColor: '#ffffff',
      bodyColor: '#ffffff',
      borderColor: '#024757',
      borderWidth: 1,
      cornerRadius: 8,
      displayColors: false,
      callbacks: {
        label: function(context) {
          return context.parsed.y + 'k';
        }
      }
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        display: false,
      },
      ticks: {
        color: '#666',
        font: {
          size: 12,
        },
      },
      categoryPercentage: 0.6, // Reduce bar width
      barPercentage: 0.8, // Add spacing between bars
    },
    y: {
      display: true,
      grid: {
        display: true,
        color: '#f0f0f0',
        drawBorder: false,
      },
      ticks: {
        color: '#666',
        font: {
          size: 12,
        },
        callback: function(value) {
          return value + 'k';
        }
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 12,
      borderSkipped: false,
    },
  },
  datasets: {
    bar: {
      barThickness: 20, // Make bars thinner
      maxBarThickness: 25,
    },
  },
};

// Monthly labels
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function SignupChart({ data = [] }) {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Signups',
        data: data,
        backgroundColor: '#024757', // Dark teal color
        borderColor: '#024757',
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className={classes.chartContainer}>
      <Bar options={options} data={chartData} />
    </div>
  );
}
