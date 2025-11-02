import React from 'react';
import Bar from './navbar.tsx';
import Shop from './shop.tsx';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <>
    { /* title */ }
    <section id="about"
        className="d-flex flex-column justify-content-center align-items-center text-center text-white"
        style={{
          backgroundColor: '#6f4e37',
          height: '100vh',
          padding: '0 20px',
    }}
    >

     <h1 className = 'display-3 fw-bold' 
     style={{ 
      letterSpacing: '2.5px' 
    }}
    >Welcome to Coffee Corner!</h1>

    <p className = 'lead mb-4'>
      Come Brew With Us!
    </p>

 <NavLink
  as={Link}
  to="/shop"
  className="btn btn-lg px-5 fw-semibold shadow-sm custom-btn d-flex align-items-center gap-2"
>
  <i className="bi bi-cup-hot"></i> Order Now
</NavLink>


    </section>

    

</>
  );
};

export default About;
