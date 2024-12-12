import { Link } from 'react-router-dom';
import routes from '../utils/routes';

const Navbar = () => (
  <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
    <div className="container">
      <Link className="navbar-brand" to={routes.homePagePath()}>
        Hexlet Chat
      </Link>
    </div>
  </nav>
);

export default Navbar;
