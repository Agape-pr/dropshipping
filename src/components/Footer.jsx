import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer custom-bg">
      <div className="container footer-content-new">
        <div className="footer-logo">isooko<span className="highlight" style={{color: 'var(--accent-color)'}}>lift</span></div>
        
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Isookolift · Kigali, Rwanda</p>
        </div>
        
        <div className="footer-links-new">
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
