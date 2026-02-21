import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { label: 'Dashboard', path: '/', icon: '📊' },
    { label: 'Customers', path: '/customers', icon: '👥' },
    { label: 'Analytics', path: '/analytics', icon: '📈' },
    { label: 'Settings', path: '/settings', icon: '⚙️' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-dark-900 text-white transition-all duration-300 z-50 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Logo */}
      <div className="h-20 flex items-center justify-between px-6 border-b border-dark-700">
        {isOpen && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center font-bold">
              D
            </div>
            <span className="font-bold text-lg">Dashboard</span>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-dark-700 rounded-lg transition-colors"
        >
          {isOpen ? '◀' : '▶'}
        </button>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-8 space-y-4">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive(item.path)
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                : 'text-dark-300 hover:bg-dark-800 hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {isOpen && <span className="font-medium">{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      {isOpen && (
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-dark-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Admin User</p>
              <p className="text-xs text-dark-400 truncate">admin@dashboard.com</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
