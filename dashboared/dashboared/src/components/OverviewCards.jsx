import { useEffect, useRef } from 'react';
import StatsCard from './StatsCard';
import { createStatsAnimation } from '../animations/timelines';

const OverviewCards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      createStatsAnimation(containerRef.current.querySelectorAll('[data-stat-card]'));
    }
  }, []);

  const stats = [
    {
      icon: '👥',
      label: 'Total Customers',
      value: 1248,
      subtext: 'Active customers',
      trend: '+12%',
      color: 'blue'
    },
    {
      icon: '💰',
      label: 'Total Revenue',
      value: 48250,
      subtext: 'Monthly revenue',
      trend: '+8%',
      color: 'purple'
    },
    {
      icon: '📈',
      label: 'Growth Rate',
      value: 23.5,
      subtext: 'Year over year',
      trend: '+15%',
      color: 'green'
    },
    {
      icon: '⭐',
      label: 'Customer Rating',
      value: 4.8,
      subtext: 'Out of 5.0',
      trend: '+0.3',
      color: 'pink'
    }
  ];

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} data-stat-card>
          <StatsCard {...stat} />
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
