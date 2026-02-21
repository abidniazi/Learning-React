import { useEffect, useRef } from 'react';
import Card from './Card';
import { animateCounter } from '../animations/timelines';

const StatsCard = ({ icon, label, value, subtext, trend, color = 'blue' }) => {
  const valueRef = useRef(null);

  useEffect(() => {
    if (valueRef.current && typeof value === 'number') {
      animateCounter(valueRef.current, 0, value, 1);
    }
  }, [value]);

  const colorMap = {
    blue: 'bg-blue-50 text-blue-600',
    purple: 'bg-purple-50 text-purple-600',
    green: 'bg-green-50 text-green-600',
    pink: 'bg-pink-50 text-pink-600',
  };

  const trendColor = trend && trend.startsWith('+') ? 'text-green-600' : 'text-red-600';

  return (
    <Card className="p-6 hover:shadow-hover">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-dark-500 text-sm font-medium">{label}</p>
          <h3 className="text-2xl font-bold text-dark-900 mt-2" ref={valueRef}>
            {typeof value === 'number' ? value : value}
          </h3>
          {subtext && <p className="text-dark-400 text-xs mt-1">{subtext}</p>}
          {trend && (
            <p className={`text-sm font-medium mt-2 ${trendColor}`}>
              {trend} from last month
            </p>
          )}
        </div>
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl ${colorMap[color]}`}
        >
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;
