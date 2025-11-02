import React from 'react';
import Bar from './navbar.tsx';
import Shop from './shop.tsx';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: React.FC = () => {
  return (
    <>
   <Bar/>

    { /* title */ }
    <section id="home"
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

     <button
            className="btn btn-light btn-lg px-5 fw-semibold shadow-sm custom-btn"
          >
            Shop Now
          </button>

    </section>

    <Shop/>

</>
  );
};

export default Home;
