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
import classes from './BarChart.module.css';
import { mergeClass } from '@/resources/utils/helper';

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

// Monthly data matching the image
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const data = {
  labels,
  datasets: [
    {
      label: 'Revenue',
      data: [1.5, 2.5, 2.0, 3.5, 1.2, 2.2, 1.0, 2.8, 1.2, 1.8, 1.2, 2.8],
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

export default function BarChart({className}) {
  return (
    <div className={mergeClass(classes.chartContainer, className)}>
      <Bar options={options} data={data} />
    </div>
  );
}
