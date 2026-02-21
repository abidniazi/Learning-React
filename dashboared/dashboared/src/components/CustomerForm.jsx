import { useState, useEffect, useRef } from 'react';
import Card from './Card';
import Input from './Input';
import Button from './Button';
import { createFormAnimation } from '../animations/timelines';
import { useCustomers } from '../context/CustomerContext';

const CustomerForm = ({ onSubmit, initialData = null, onCancel }) => {
  const formRef = useRef(null);
  const { addCustomer } = useCustomers();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'active',
    joinDate: new Date().toISOString().split('T')[0],
    ...initialData
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (formRef.current) {
      createFormAnimation(formRef.current.querySelectorAll('[data-form-field]'));
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      addCustomer(formData);
      onSubmit?.(formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        status: 'active',
        joinDate: new Date().toISOString().split('T')[0]
      });
      setErrors({});
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-8 max-w-2xl">
      <h2 className="text-2xl font-bold text-dark-900 mb-6">Add New Customer</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div data-form-field>
          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="John Doe"
            icon="👤"
            required
          />
        </div>

        {/* Email and Phone */}
        <div data-form-field className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="john@example.com"
            icon="📧"
            required
          />
          <Input
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder="+1 (555) 123-4567"
            icon="📱"
            required
          />
        </div>

        {/* Status and Date */}
        <div data-form-field className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-dark-900 mb-2">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <Input
            label="Join Date"
            name="joinDate"
            type="date"
            value={formData.joinDate}
            onChange={handleChange}
          />
        </div>

        {/* Buttons */}
        <div data-form-field className="flex gap-4 pt-4">
          <Button type="submit" loading={loading}>
            {initialData ? 'Update Customer' : 'Add Customer'}
          </Button>
          {onCancel && (
            <Button type="button" variant="secondary" onClick={onCancel}>
              Cancel
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
};

export default CustomerForm;
