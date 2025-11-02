import React from 'react';
import '../index.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bar: React.FC = () => {
  return (
    <Navbar 
    expand = "lg" 
    sticky = "top"
    className = "fw-bold cus-navbar"
    >
        <Container>
            <Navbar.Brand href ="#home"> Coffee Corner </Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">Shop Now</Nav.Link>
            <Nav.Link href="#projects">Location</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default Bar;
