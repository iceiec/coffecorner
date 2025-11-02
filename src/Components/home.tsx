import React from 'react';
import About from './about.tsx';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <>
      <section
        id="home"
        className="d-flex flex-column justify-content-center align-items-center text-center text-white home-section"
      >
        <h1 className="display-3 fw-bold mb-3 home-title">
          Welcome to Coffee Corner!
        </h1>

        <p className="lead mb-4 home-subtitle">
          Come Brew With Us!
        </p>

        <NavLink
          as={Link}
          to="/shop.tsx"
          className="btn btn-lg fw-semibold shadow-sm  order-btn d-flex align-items-center gap-2 order-btn"
        >
          <i className="bi bi-cup-hot"></i> Order Now
        </NavLink>
      </section>

      <About />
    </>
  );
};

export default Home;
