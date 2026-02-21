import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-dark-50">
      <Sidebar />
      <Header />
      <main className="flex-1 ml-64 mt-20 p-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
