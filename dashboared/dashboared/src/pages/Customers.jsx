import { useState, useEffect, useRef } from 'react';
import { Layout, CustomerForm, CustomerTable } from '../components';
import { useCustomers } from '../context/CustomerContext';
import { createPageTransition } from '../animations/timelines';

const Customers = () => {
  const pageRef = useRef(null);
  const { customers, deleteCustomer } = useCustomers();
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    if (pageRef.current) {
      createPageTransition(null, pageRef.current);
    }
  }, []);

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filterStatus === 'all' || customer.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      deleteCustomer(id);
    }
  };

  const handleFormSubmit = () => {
    setShowForm(false);
  };

  return (
    <Layout>
      <div ref={pageRef} className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-dark-900">Customers</h1>
            <p className="text-dark-500 mt-2">Manage your customer database</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
          >
            {showForm ? '✕ Close' : '+ Add Customer'}
          </button>
        </div>

        {/* Add Customer Form */}
        {showForm && (
          <div className="animate-fadeIn">
            <CustomerForm
              onSubmit={handleFormSubmit}
              onCancel={() => setShowForm(false)}
            />
          </div>
        )}

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        {/* Results info */}
        <div className="flex items-center justify-between">
          <p className="text-dark-600">
            Showing <span className="font-semibold">{filteredCustomers.length}</span> of{' '}
            <span className="font-semibold">{customers.length}</span> customers
          </p>
        </div>

        {/* Customers Table */}
        <CustomerTable
          customers={filteredCustomers}
          onDelete={handleDelete}
        />
      </div>
    </Layout>
  );
};

export default Customers;
