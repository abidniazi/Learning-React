import { useRef, useEffect } from 'react';
import { Layout, Card } from '../components';
import { useFadeInAnimation } from '../hooks/useAnimation';

const Analytics = () => {
  useFadeInAnimation('[data-analytics]');

  const chartData = [
    { month: 'Jan', value: 4000 },
    { month: 'Feb', value: 3000 },
    { month: 'Mar', value: 2000 },
    { month: 'Apr', value: 2780 },
    { month: 'May', value: 1890 },
    { month: 'Jun', value: 2390 }
  ];

  const getMaxValue = () => Math.max(...chartData.map(d => d.value));
  const maxValue = getMaxValue();

  return (
    <Layout>
      <div className="space-y-8">
        <div data-analytics>
          <h1 className="text-3xl font-bold text-dark-900">Analytics</h1>
          <p className="text-dark-500 mt-2">Track your business performance</p>
        </div>

        {/* Key Metrics */}
        <div data-analytics className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6">
            <p className="text-dark-600 text-sm font-medium">Total Visits</p>
            <p className="text-2xl font-bold text-dark-900 mt-2">12.4K</p>
            <p className="text-green-600 text-sm mt-2">↑ 12% from last month</p>
          </Card>
          <Card className="p-6">
            <p className="text-dark-600 text-sm font-medium">Total Sales</p>
            <p className="text-2xl font-bold text-dark-900 mt-2">$48.2K</p>
            <p className="text-green-600 text-sm mt-2">↑ 8% from last month</p>
          </Card>
          <Card className="p-6">
            <p className="text-dark-600 text-sm font-medium">Avg Duration</p>
            <p className="text-2xl font-bold text-dark-900 mt-2">4m 32s</p>
            <p className="text-red-600 text-sm mt-2">↓ 2% from last month</p>
          </Card>
          <Card className="p-6">
            <p className="text-dark-600 text-sm font-medium">Bounce Rate</p>
            <p className="text-2xl font-bold text-dark-900 mt-2">32.5%</p>
            <p className="text-green-600 text-sm mt-2">↓ 5% from last month</p>
          </Card>
        </div>

        {/* Revenue Chart */}
        <Card data-analytics className="p-8">
          <h2 className="text-xl font-bold text-dark-900 mb-6">Revenue Trend</h2>
          <div className="space-y-4">
            <div className="flex gap-12">
              {chartData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-4">
                  <div className="w-full bg-dark-200 rounded-md relative h-48 flex items-end">
                    <div
                      className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-md transition-all duration-500"
                      style={{
                        height: `${(data.value / maxValue) * 100}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-dark-900">{data.month}</span>
                  <span className="text-xs text-dark-500">${(data.value / 1000).toFixed(0)}K</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Detailed Stats */}
        <div data-analytics className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-dark-900 mb-4">Top Sources</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-dark-600">Direct</span>
                <span className="font-semibold text-dark-900">4,250</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-dark-600">Organic</span>
                <span className="font-semibold text-dark-900">3,120</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-dark-600">Referral</span>
                <span className="font-semibold text-dark-900">2,540</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-dark-600">Paid</span>
                <span className="font-semibold text-dark-900">2,195</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-dark-900 mb-4">Device Breakdown</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-dark-600">Desktop</span>
                <span className="font-semibold text-dark-900">6,245</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-dark-600">Mobile</span>
                <span className="font-semibold text-dark-900">4,125</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-dark-600">Tablet</span>
                <span className="font-semibold text-dark-900">735</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
