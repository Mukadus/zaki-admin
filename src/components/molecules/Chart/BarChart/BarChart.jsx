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
import { mergeClass } from '@/resources/utils/helper';
import classes from './BarChart.module.css';

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
      bottom: 0,
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
      borderColor: '#4AC4B4',
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
    },
    y: {
      display: true,
      grid: {
        display: false,
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
};

// Monthly labels
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function BarChart({ data = [], className }) {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Revenue',
        data: data,
        backgroundColor: [
          '#EEF7F6', 
          '#EEF7F6', 
          '#EEF7F6', 
          '#024757', 
          '#EEF7F6',
          '#EEF7F6', 
          '#EEF7F6', 
          '#EEF7F6',
          '#EEF7F6',
          '#EEF7F6',
          '#EEF7F6',
        ],
        borderColor: [
          '#4AC4B4',
          '#4AC4B4',
          '#4AC4B4',
          '#2A8B7A', // Apr - dark teal border
          '#4AC4B4',
          '#4AC4B4',
          '#4AC4B4',
          '#4AC4B4',
          '#4AC4B4',
          '#4AC4B4',
          '#4AC4B4',
          '#4AC4B4',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={mergeClass(classes.chartContainer, className)}>
      <Bar options={options} data={chartData} />
    </div>
  );
}
