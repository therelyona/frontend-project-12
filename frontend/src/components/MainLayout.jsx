import Navbar from './Navbar.jsx';

const MainLayout = ({ children }) => (
  <div className="d-flex flex-column h-100">
    <Navbar />
    {children}
  </div>
);

export default MainLayout;
