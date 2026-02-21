import { useEffect, useRef } from 'react';
import { Layout, OverviewCards, Card } from '../components';
import { useCustomers } from '../context/CustomerContext';
import { createCardStaggerTimeline } from '../animations/timelines';

const Dashboard = () => {
  const containerRef = useRef(null);
  const { customers } = useCustomers();

  useEffect(() => {
    if (containerRef.current) {
      const elementsToAnimate = containerRef.current.querySelectorAll('[data-animate]');
      createCardStaggerTimeline(elementsToAnimate);
    }
  }, []);

  const recentCustomers = customers.slice(0, 5);

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div data-animate>
          <h1 className="text-3xl font-bold text-dark-900">Welcome back, Admin!</h1>
          <p className="text-dark-500 mt-2">Here's what happening with your business today.</p>
        </div>

        {/* Stats Cards */}
        <div ref={containerRef}>
          <OverviewCards />
        </div>

        {/* Recent Customers */}
        <div data-animate>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-dark-900">Recent Customers</h2>
            <a href="/customers" className="text-blue-600 hover:text-blue-700 font-medium">
              View all →
            </a>
          </div>

          <Card className="overflow-hidden">
            {recentCustomers.length > 0 ? (
              <div className="divide-y divide-dark-200">
                {recentCustomers.map((customer, index) => (
                  <div
                    key={customer.id}
                    className="p-6 hover:bg-dark-50 transition-colors duration-200 flex items-center justify-between"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-dark-900">{customer.name}</p>
                        <p className="text-sm text-dark-500">{customer.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-dark-900">{customer.revenue}</p>
                      <span
                        className={`inline-block text-xs font-medium px-2 py-1 rounded mt-1 ${
                          customer.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {customer.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-dark-500">
                No customers yet. Add one to get started!
              </div>
            )}
          </Card>
        </div>

        {/* Quick Stats */}
        <div data-animate className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-dark-600 text-sm font-medium mb-2">Conversion Rate</h3>
            <p className="text-3xl font-bold text-dark-900">3.24%</p>
            <p className="text-green-600 text-sm mt-2">↑ 0.45% from last month</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-dark-600 text-sm font-medium mb-2">Avg. Order Value</h3>
            <p className="text-3xl font-bold text-dark-900">$248</p>
            <p className="text-green-600 text-sm mt-2">↑ $12 from last month</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-dark-600 text-sm font-medium mb-2">Churn Rate</h3>
            <p className="text-3xl font-bold text-dark-900">2.1%</p>
            <p className="text-green-600 text-sm mt-2">↓ 0.3% from last month</p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
