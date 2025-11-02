import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bar: React.FC = () => {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="fw-semibold shadow-sm custom-navbar"
    >
      <Container>
        <Navbar.Brand as={Link} to="/home.tsx" className="navbar-brand-custom ">
          ☕ CC
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">

            <NavLink 
           
            to="/home.tsx" 
            className ={({ isActive }) =>
            isActive ? 'nav-btn  active-order' : 'nav-btn'
            }
            >
              Home
            </NavLink>

            <NavLink 
            to="/shop.tsx" 
            className = {({ isActive }) =>
            isActive ? 'nav-btn  active-order' : 'nav-btn'
            }>
              Order Now
            </NavLink>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Bar;
