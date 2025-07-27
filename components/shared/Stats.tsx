'use client';

import { useState, useMemo } from 'react';
import { parseISO, isSameWeek, isSameMonth, isSameYear } from 'date-fns';
import { dummyStats } from '@/constants';
import JobStatsChart from '../charts/JobStatsChart';

type Filter = 'week' | 'month' | 'year';

const Stats = () => {
  const [filter, setFilter] = useState<Filter>('week');

  const filteredStats = useMemo(() => {
    const now = new Date();
    return dummyStats.filter((stat) => {
      const date = parseISO(stat.date);
      if (filter === 'week') return isSameWeek(date, now);
      if (filter === 'month') return isSameMonth(date, now);
      if (filter === 'year') return isSameYear(date, now);
    });
  }, [filter]);

  const totalViews = filteredStats.reduce((sum, stat) => sum + stat.views, 0);
  const totalApplied = filteredStats.reduce((sum, stat) => sum + stat.applied, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Job Statistics</h2>

      <div className="flex gap-4 mb-6">
        {(['week', 'month', 'year'] as Filter[]).map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            className={`px-4 py-2 rounded ${filter === option ? 'bg-purple-600 text-white' : 'bg-gray-200'
              }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex gap-8 text-lg mb-6">
        <div>
          <h4 className="text-gray-600">Job Views</h4>
          <p className="font-semibold">{totalViews}</p>
        </div>
        <div>
          <h4 className="text-gray-600">Jobs Applied</h4>
          <p className="font-semibold">{totalApplied}</p>
        </div>
      </div>

      <JobStatsChart data={filteredStats} />
    </div>
  );
}

export default Stats;