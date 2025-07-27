'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

export default function JobStatsChart({ data }: { data: any[] }) {
  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: 'Job Views',
        data: data.map((d) => d.views),
        borderColor: 'rgba(99, 102, 241, 1)',
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        tension: 0.3,
        fill: true,
      },
      {
        label: 'Jobs Applied',
        data: data.map((d) => d.applied),
        borderColor: 'rgba(139, 92, 246, 1)',
        backgroundColor: 'rgba(139, 92, 246, 0.2)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      tooltip: { mode: 'index' as const, intersect: false },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false,
    },
    scales: {
      x: { title: { display: true, text: 'Date' } },
      y: { beginAtZero: true },
    },
  };

  return <Line data={chartData} options={options} />;
}
