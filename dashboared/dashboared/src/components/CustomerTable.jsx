import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Button from './Button';
import { createTableRowAnimation } from '../animations/timelines';

const CustomerTable = ({ customers, onEdit, onDelete }) => {
  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current) {
      createTableRowAnimation(tableRef.current.querySelectorAll('tbody tr'));
    }
  }, [customers]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-dark-100 text-dark-800';
    }
  };

  if (customers.length === 0) {
    return (
      <Card className="p-8 text-center">
        <p className="text-dark-500">No customers found. Add one to get started!</p>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table ref={tableRef} className="w-full">
          <thead className="bg-dark-50 border-b border-dark-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-900">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-900">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-900">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-900">Join Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-900">Revenue</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-200">
            {customers.map(customer => (
              <tr
                key={customer.id}
                className="hover:bg-dark-50 transition-colors duration-200"
              >
                <td className="px-6 py-4">
                  <Link
                    to={`/customers/${customer.id}`}
                    className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {customer.name}
                  </Link>
                </td>
                <td className="px-6 py-4 text-sm text-dark-600">{customer.email}</td>
                <td className="px-6 py-4 text-sm text-dark-600">{customer.phone}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      customer.status
                    )}`}
                  >
                    {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-dark-600">
                  {new Date(customer.joinDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 font-semibold text-dark-900">{customer.revenue}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onEdit?.(customer)}
                    >
                      ✏️
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => onDelete?.(customer.id)}
                    >
                      🗑️
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default CustomerTable;
