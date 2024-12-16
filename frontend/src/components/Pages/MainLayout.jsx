import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import routes from '../../utils/routes';

const MainLayout = ({ children }) => {
  const { loggedIn, logOut } = useAuth();
  return (
    <div className="d-flex flex-column h-100">
      <Navbar className="shadow-sm bg-white" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Hexlet Chat</Navbar.Brand>
          {loggedIn && (
            <Link
              onClick={logOut}
              to={routes.loginPagePath()}
              type="button"
              className="btn btn-primary"
            >
              Выйти
            </Link>
          )}
        </Container>
      </Navbar>
      {children}
    </div>
  );
};

export default MainLayout;
