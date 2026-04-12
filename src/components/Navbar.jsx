import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Globe } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { getCartCount } = useContext(CartContext);
  const cartCount = getCartCount();

  return (
    <header className="navbar-container">
      <div className="container navbar">
        <div className="nav-left">
          <Link to="/" className="logo">
            <Globe className="logo-icon" size={28} />
            <span className="logo-text">Kigali<span className="highlight">Global</span></span>
          </Link>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <a href="#categories">Categories</a>
          <a href="#featured">Featured</a>
        </nav>

        <div className="nav-right">
          <Link to="/checkout" className="cart-link" aria-label="Cart">
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <button className="mobile-menu-btn" aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
