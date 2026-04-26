import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Globe } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { getCartCount } = useContext(CartContext);
  const cartCount = getCartCount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar-container">
      <div className="container navbar">
        <div className="nav-left">
          <Link to="/" className="logo">
            <Globe className="logo-icon" size={28} />
            <span className="logo-text">isooko</span>
          </Link>
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Shop</Link>
          <a href="/#categories" onClick={toggleMenu}>Categories</a>
          <a href="#" onClick={toggleMenu}>Track order</a>
          <Link to="/for-business" onClick={toggleMenu}>For businesses</Link>
        </nav>

        <div className="nav-right">
          <Link to="/checkout" className="cart-link" aria-label="Cart">
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <button className="mobile-menu-btn" aria-label="Menu" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
