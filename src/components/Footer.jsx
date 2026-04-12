import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer custom-bg">
      <div className="container footer-content">
        <div className="footer-section brand">
          <h2 className="footer-logo">Kigali<span className="highlight">Global</span></h2>
          <p className="footer-tagline">Shop Smart. Buy Global. Direct from China to Kigali, Rwanda safely and affordably.</p>
        </div>
        
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/#categories">Shop Categories</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">How it Works</a></li>
          </ul>
        </div>
        
        <div className="footer-section links">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/refund">Refund Policy</Link></li>
          </ul>
        </div>
        
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <MapPin size={18} className="icon" />
              <span>KN 4 Ave, Kigali, Rwanda</span>
            </li>
            <li>
              <Mail size={18} className="icon" />
              <a href="mailto:support@kigaliglobal.rw">support@kigaliglobal.rw</a>
            </li>
            <li>
              <Phone size={18} className="icon" />
              <span>+250 788 123 456</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} KigaliGlobal Dropshipping. All Rights Reserved.</p>
        </div>
      </div>

      <a href="https://wa.me/250788123456" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
        <MessageCircle size={32} />
      </a>
    </footer>
  );
};

export default Footer;
