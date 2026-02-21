import React, { createContext, useState, useCallback } from 'react';

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      phone: '+1 (555) 123-4567',
      status: 'active',
      joinDate: '2024-01-15',
      revenue: '$12,450'
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@example.com',
      phone: '+1 (555) 234-5678',
      status: 'active',
      joinDate: '2024-02-20',
      revenue: '$8,920'
    },
    {
      id: 3,
      name: 'Carol Williams',
      email: 'carol@example.com',
      phone: '+1 (555) 345-6789',
      status: 'inactive',
      joinDate: '2024-03-10',
      revenue: '$5,200'
    },
    {
      id: 4,
      name: 'David Brown',
      email: 'david@example.com',
      phone: '+1 (555) 456-7890',
      status: 'active',
      joinDate: '2024-04-05',
      revenue: '$15,670'
    }
  ]);

  const addCustomer = useCallback((customer) => {
    const newCustomer = {
      id: Date.now(),
      ...customer,
      revenue: '$0'
    };
    setCustomers(prev => [newCustomer, ...prev]);
    return newCustomer;
  }, []);

  const updateCustomer = useCallback((id, updatedData) => {
    setCustomers(prev =>
      prev.map(customer =>
        customer.id === id ? { ...customer, ...updatedData } : customer
      )
    );
  }, []);

  const deleteCustomer = useCallback((id) => {
    setCustomers(prev => prev.filter(customer => customer.id !== id));
  }, []);

  const getCustomerById = useCallback((id) => {
    return customers.find(customer => customer.id === id);
  }, [customers]);

  const value = {
    customers,
    addCustomer,
    updateCustomer,
    deleteCustomer,
    getCustomerById,
  };

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomers = () => {
  const context = React.useContext(CustomerContext);
  if (!context) {
    throw new Error('useCustomers must be used within CustomerProvider');
  }
  return context;
};
