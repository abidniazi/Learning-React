import { useState } from 'react';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const notifications = [
    { id: 1, message: 'New customer signed up', time: '5 min ago' },
    { id: 2, message: 'Payment received from Alice', time: '1 hour ago' },
    { id: 3, message: 'System maintenance scheduled', time: '2 hours ago' }
  ];

  return (
    <header className="fixed top-0 right-0 left-64 h-20 bg-white border-b border-dark-200 z-40">
      <div className="h-full px-8 flex items-center justify-between">
        {/* Search bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search customers, invoices..."
              className="w-full px-4 py-2 bg-dark-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400">
              🔍
            </span>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-6 ml-8">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 hover:bg-dark-100 rounded-lg transition-colors"
            >
              🔔
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-hover border border-dark-200">
                <div className="p-4 border-b border-dark-200">
                  <h3 className="font-semibold text-dark-900">Notifications</h3>
                </div>
                <div className="divide-y divide-dark-200 max-h-96 overflow-y-auto">
                  {notifications.map(notif => (
                    <div key={notif.id} className="p-4 hover:bg-dark-50 transition-colors">
                      <p className="text-sm text-dark-900">{notif.message}</p>
                      <p className="text-xs text-dark-400 mt-1">{notif.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* User menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-3 p-2 hover:bg-dark-100 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                A
              </div>
              <span className="text-sm font-medium text-dark-900">Admin</span>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-hover border border-dark-200">
                <div className="p-4 border-b border-dark-200">
                  <p className="text-sm font-medium text-dark-900">Admin User</p>
                  <p className="text-xs text-dark-400">admin@dashboard.com</p>
                </div>
                <button className="w-full text-left px-4 py-2 text-sm text-dark-900 hover:bg-dark-50 transition-colors">
                  Profile
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-dark-900 hover:bg-dark-50 transition-colors">
                  Settings
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-dark-200">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
