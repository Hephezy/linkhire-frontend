"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type Suggestion = {
  label: string;
  increment: string;
};

interface DoughnutChartCardProps {
  title: string;
  percentage: number;
  labels?: string[];
  values?: number[];
  colors?: string[];
  suggestions?: Suggestion[];
  footerText?: string;
  showLegend?: boolean;
}

export default function DoughnutChartCard({
  title,
  percentage,
  labels = [],
  values = [],
  colors = [],
  suggestions = [],
  footerText,
  showLegend = true,
}: DoughnutChartCardProps) {
  const isSingleProgress = labels.length === 0;

  // Handle empty state: either percentage is 0 or values are all 0
  const isEmptyData = isSingleProgress
    ? percentage === 0
    : values.every((v) => v === 0);

  const data = {
    labels: isEmptyData ? [] : labels,
    datasets: [
      {
        data: isEmptyData
          ? [1]
          : isSingleProgress
            ? [percentage, 100 - percentage]
            : values,
        backgroundColor: isEmptyData
          ? ['#ededed']
          : isSingleProgress
            ? ['#6A0DAD', '#E5E5E5']
            : colors,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '75%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="max-w-md p-4 bg-white border rounded shadow-sm text-gray-800">
      {/* Title */}
      <h2 className="text-center text-lg font-semibold mb-4">{title}</h2>

      {/* Chart and optional legend */}
      <div className="flex items-center justify-center gap-6">
        {/* Doughnut Chart */}
        <div className="relative w-36 h-36">
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-semibold">
              {percentage}
              {isSingleProgress && '%'}
            </span>
          </div>
        </div>

        {/* Legend */}
        {showLegend && labels.length > 0 && !isEmptyData && (
          <div className="flex flex-col gap-2 text-sm">
            {labels.map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{ backgroundColor: colors[i] }}
                />
                <span className="text-gray-700">{label}</span>
                <span className="ml-auto font-medium">{values[i]}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="mt-4 space-y-2 text-sm">
          <p className="font-medium text-gray-700">
            Your resume is only {percentage}% complete! Let’s improve it
          </p>
          {suggestions.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-xs font-bold border border-purple-500 text-purple-700 rounded">
                {s.increment}
              </span>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      {footerText && (
        <div className="mt-4 text-xs text-right text-gray-400 border-t pt-2">
          {footerText}
        </div>
      )}
    </div>
  );
}
