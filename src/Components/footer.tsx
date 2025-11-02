import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer text-white py-5 mt-5">
      <Container>
        <Row className="gy-4">
          {/* Brand Section */}
          <Col md={4} className="text-center text-md-start">
            <h4 className="fw-bold mb-3">☕ Coffee Corner</h4>
            <p className="text-light-emphasis mb-0">
              Brewing smiles since <strong>December 2024</strong> in <strong>Bustos, Bulacan</strong>.
            </p>
          </Col>

          {/* Contact Section */}
          <Col md={4} className="text-center">
            <h5 className="fw-semibold mb-3">Contact</h5>
            <p className="mb-1">📍 Bustos, Bulacan</p>
            <p className="mb-1">📞 +63 912 345 6789</p>
            <p>📧 coffeecorner@gmail.com</p>
          </Col>

          {/* Social Media Section */}
          <Col md={4} className="text-center text-md-end">
            <h5 className="fw-semibold mb-3">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="bi bi-tiktok fs-4"></i>
              </a>
            </div>
          </Col>
        </Row>

        {/* Divider */}
        <hr className="border-light my-4" />

        {/* Bottom Row */}
        <Row className="align-items-center">
          <Col className="text-center text-md-start small text-light-emphasis">
            © {new Date().getFullYear()} Coffee Corner. All rights reserved.
          </Col>
          <Col className="text-center text-md-end">
            <button onClick={scrollToTop} className="btn btn-outline-light btn-sm rounded-pill px-3">
              ↑ Back to top
            </button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
