import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navbarStyle = {
    backgroundColor: '#3498db',
    maxWidth: '100%', 
    width: '100%',
    margin: '0 auto',
  };

  const navLinkStyle = {
    marginRight: '20px',
  };

  return (
    <Navbar style={navbarStyle} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Tasty foods</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" style={navLinkStyle}>Home</Nav.Link>
            <Nav.Link as={Link} to="/my-recipe" style={navLinkStyle}>My Recipe</Nav.Link>
            <Nav.Link as={Link} to="/about-us" style={navLinkStyle}>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
