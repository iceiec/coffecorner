import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          
          {/* Left Side - Text */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
            <h2 className="fw-bold display-5 text-brown mb-3">
              Our Story
            </h2>
            <p className="lead text-muted mb-4">
              Established in <strong>December 2024</strong> in the charming town of 
              <strong> Bustos, Bulacan</strong>, 
              <span className="text-brown fw-semibold"> Coffee Corner </span> was built 
              on a simple belief — that every cup of coffee can spark a meaningful connection.
            </p>
            <p className="fs-5 text-muted">
              From our humble beginnings, we’ve grown into a cozy spot where 
              locals and travelers alike can enjoy hand-crafted brews, rich aromas, 
              and a comforting space to relax, connect, and recharge.
            </p>

            <a
  href="https://www.facebook.com/profile.php?id=100094355480053"
  target="_blank"
  rel="noopener noreferrer"
>
            <button className="btn about-btn mt-3 px-4 py-2 fw-semibold shadow-sm">
              Learn More
            </button>
            </a>
          </div>

          {/* Right Side - Image */}
          <div className="col-lg-6 text-center">
            <div className="about-img-wrapper">
              <img
                src={`${process.env.PUBLIC_URL}/cc.jpg`}
                alt="Coffee Corner Café"
                className="about-img rounded-4 shadow-lg"
              />
              <div className="about-overlay rounded-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
