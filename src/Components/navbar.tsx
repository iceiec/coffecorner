import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../index.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

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
            <Nav.Link as = { Link } to = "/home.tsx">
            Home
            </Nav.Link>
            <Nav.Link as = { Link } to = "/shop.tsx"> 
            Order Now 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default Bar;
