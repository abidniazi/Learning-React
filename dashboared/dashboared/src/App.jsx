import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomerProvider } from './context/CustomerContext';
import {
  Dashboard,
  Customers,
  CustomerDetail,
  Analytics,
  Settings
} from './pages';

function App() {
  return (
    <CustomerProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:id" element={<CustomerDetail />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </CustomerProvider>
  );
}

export default App
