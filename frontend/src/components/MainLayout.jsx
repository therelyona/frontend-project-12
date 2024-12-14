import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }) => (
  <div className="d-flex flex-column h-100">
    <Navbar className="shadow-sm bg-white" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Hexlet Chat</Navbar.Brand>
      </Container>
    </Navbar>
    {children}
  </div>
);

export default MainLayout;
