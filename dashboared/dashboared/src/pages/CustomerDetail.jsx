import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout, Card, Button } from '../components';
import { useCustomers } from '../context/CustomerContext';
import { useFadeInAnimation } from '../hooks/useAnimation';

const CustomerDetail = () => {
  const { id } = useParams();
  const { getCustomerById } = useCustomers();

  useFadeInAnimation('[data-detail-content]');

  const customer = getCustomerById(parseInt(id));

  if (!customer) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-dark-900 mb-4">Customer not found</h2>
          <Link to="/customers" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Customers
          </Link>
        </div>
      </Layout>
    );
  }

  const activityLog = [
    { id: 1, action: 'Order placed', description: 'Customer ordered $250 worth of products', timestamp: '2 hours ago' },
    { id: 2, action: 'Payment received', description: 'Payment of $250 was processed successfully', timestamp: '2 hours ago' },
    { id: 3, action: 'Account created', description: 'New customer account was created', timestamp: customer.joinDate }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Back Button */}
        <Link to="/customers" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2">
          ← Back to Customers
        </Link>

        {/* Header */}
        <div data-detail-content className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {customer.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-dark-900">{customer.name}</h1>
              <p className="text-dark-500">{customer.email}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button>Edit Customer</Button>
            <Button variant="danger">Delete</Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <Card data-detail-content className="p-6">
              <h2 className="text-xl font-bold text-dark-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-dark-200">
                  <span className="text-dark-600">Email</span>
                  <span className="font-medium text-dark-900">{customer.email}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-dark-200">
                  <span className="text-dark-600">Phone</span>
                  <span className="font-medium text-dark-900">{customer.phone}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-dark-600">Status</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      customer.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : customer.status === 'inactive'
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                  </span>
                </div>
              </div>
            </Card>

            {/* Activity Log */}
            <Card data-detail-content className="p-6">
              <h2 className="text-xl font-bold text-dark-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {activityLog.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex gap-4 pb-4 border-b border-dark-200 last:border-b-0"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-dark-900">{item.action}</p>
                      <p className="text-sm text-dark-500">{item.description}</p>
                      <p className="text-xs text-dark-400 mt-1">{item.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right - Summary */}
          <div className="space-y-6">
            {/* Stats */}
            <Card data-detail-content className="p-6">
              <h2 className="text-xl font-bold text-dark-900 mb-4">Customer Stats</h2>
              <div className="space-y-4">
                <div className="text-center pb-4 border-b border-dark-200">
                  <p className="text-4xl font-bold text-blue-600">{customer.revenue}</p>
                  <p className="text-sm text-dark-500 mt-1">Total Revenue</p>
                </div>
                <div className="text-center pb-4 border-b border-dark-200">
                  <p className="text-2xl font-bold text-dark-900">8</p>
                  <p className="text-sm text-dark-500 mt-1">Total Orders</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-dark-900">95%</p>
                  <p className="text-sm text-dark-500 mt-1">Satisfaction Rate</p>
                </div>
              </div>
            </Card>

            {/* Meta Information */}
            <Card data-detail-content className="p-6">
              <h2 className="text-xl font-bold text-dark-900 mb-4">Information</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-dark-500">Customer Since</p>
                  <p className="font-medium text-dark-900">
                    {new Date(customer.joinDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-dark-500">Customer ID</p>
                  <p className="font-medium text-dark-900 font-mono"># {customer.id}</p>
                </div>
                <div>
                  <p className="text-dark-500">Last Updated</p>
                  <p className="font-medium text-dark-900">Today</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerDetail;
