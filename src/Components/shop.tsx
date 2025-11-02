import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Shop: React.FC = () => {
  return (
    <>
      <section
        id="shop"
        className="d-flex flex-column justify-content-center align-items-center text-center text-white"
        style={{
          backgroundColor: '#4b3832', // darker brown
          height: '100vh',
          padding: '0 20px',
        }}
      >
        <h1 className="display-4 fw-bold mb-3">Our Coffee Selection</h1>
        <p className="lead mb-4" style={{ maxWidth: '600px' }}>
          Discover our curated range of blends — roasted to perfection.
        </p>

        <div className="d-flex gap-4 flex-wrap justify-content-center">
          <div className="p-4 bg-light text-dark rounded-4 shadow-sm" style={{ width: '250px' }}>
            <h5 className="fw-bold mb-2">Classic Brew</h5>
            <p>Rich, smooth, and timeless flavor.</p>
          </div>
          <div className="p-4 bg-light text-dark rounded-4 shadow-sm" style={{ width: '250px' }}>
            <h5 className="fw-bold mb-2">Dark Roast</h5>
            <p>Intense aroma for true coffee lovers.</p>
          </div>
          <div className="p-4 bg-light text-dark rounded-4 shadow-sm" style={{ width: '250px' }}>
            <h5 className="fw-bold mb-2">Vanilla Latte</h5>
            <p>A sweet, creamy twist on your favorite cup.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
