import { useRef, useEffect } from 'react';
import { Layout, Card, Button, Input } from '../components';
import { useFadeInAnimation } from '../hooks/useAnimation';

const Settings = () => {
  useFadeInAnimation('[data-settings]');

  const settingsCategories = [
    {
      title: 'Account Settings',
      description: 'Manage your account information',
      icon: '👤',
      fields: [
        { label: 'Full Name', value: 'Admin User', type: 'text' },
        { label: 'Email Address', value: 'admin@dashboard.com', type: 'email' },
        { label: 'Phone Number', value: '+1 (555) 123-4567', type: 'tel' }
      ]
    },
    {
      title: 'Notification Settings',
      description: 'Control how you receive notifications',
      icon: '🔔',
      toggles: [
        { label: 'Email Notifications', enabled: true },
        { label: 'Order Updates', enabled: true },
        { label: 'Marketing Emails', enabled: false },
        { label: 'Security Alerts', enabled: true }
      ]
    },
    {
      title: 'Privacy Settings',
      description: 'Manage your privacy and data',
      icon: '🔒',
      toggles: [
        { label: 'Profile Public', enabled: false },
        { label: 'Show Account Balance', enabled: true },
        { label: 'Allow Data Analytics', enabled: true }
      ]
    },
    {
      title: 'Billing Settings',
      description: 'Manage your subscription and payment',
      icon: '💳',
      info: [
        { label: 'Current Plan', value: 'Professional' },
        { label: 'Billing Cycle', value: 'Monthly' },
        { label: 'Next Billing Date', value: 'Mar 21, 2024' }
      ]
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div data-settings>
          <h1 className="text-3xl font-bold text-dark-900">Settings</h1>
          <p className="text-dark-500 mt-2">Manage your account and preferences</p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {settingsCategories.map((category, idx) => (
            <Card key={idx} data-settings className="p-8">
              <div className="flex items-start justify-between mb-6 pb-6 border-b border-dark-200">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h2 className="text-xl font-bold text-dark-900">{category.title}</h2>
                    <p className="text-dark-500 text-sm mt-1">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              {category.fields && (
                <div className="space-y-4 mb-6">
                  {category.fields.map((field, fieldIdx) => (
                    <Input
                      key={fieldIdx}
                      label={field.label}
                      type={field.type}
                      value={field.value}
                    />
                  ))}
                </div>
              )}

              {/* Toggle Settings */}
              {category.toggles && (
                <div className="space-y-4 mb-6">
                  {category.toggles.map((toggle, toggleIdx) => (
                    <div key={toggleIdx} className="flex items-center justify-between">
                      <label className="text-dark-900 font-medium">{toggle.label}</label>
                      <button
                        className={`w-12 h-6 rounded-full transition-colors ${
                          toggle.enabled ? 'bg-blue-500' : 'bg-dark-300'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 bg-white rounded-full transition-transform ${
                            toggle.enabled ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Info Display */}
              {category.info && (
                <div className="space-y-3 mb-6">
                  {category.info.map((item, infoIdx) => (
                    <div key={infoIdx} className="flex justify-between items-center py-2 border-b border-dark-200">
                      <span className="text-dark-600">{item.label}</span>
                      <span className="font-medium text-dark-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                {category.fields && (
                  <>
                    <Button>Save Changes</Button>
                    <Button variant="secondary">Cancel</Button>
                  </>
                )}
                {category.title === 'Billing Settings' && (
                  <>
                    <Button>Upgrade Plan</Button>
                    <Button variant="secondary">View Invoice</Button>
                  </>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Danger Zone */}
        <Card className="p-8 border-red-200 bg-red-50">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-red-900">Danger Zone</h2>
              <p className="text-red-700 text-sm mt-1">Irreversible actions</p>
            </div>
            <Button variant="danger">Delete Account</Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Settings;
