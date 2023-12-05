import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useUserContext } from '../Context/UserContext'; // Importe o hook do contexto

const Header = () => {
 const { user, logout } = useUserContext(); // Use o hook do contexto

 return (
    <Navbar bg="dark" variant="dark" expand="md" className="navbar-expand-md">
      <Container>
        <Link to="/" className="navbar-brand">
        <img src="/Image/Logo.png" alt="Logo" width="70" height="70" />
        <span style={{ color: 'white', marginLeft: '10px' }}>Site DataViz</span>
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            {user ? (
              <>
                <Nav.Text>Bem-vindo, {user.name}!</Nav.Text>
                <Nav.Link as={Link} to="/login" onClick={logout}>
                 Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 );
};

export default Header;

