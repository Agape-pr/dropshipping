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
            <span className="logo-text">isooko<span className="highlight" style={{color: 'var(--accent-color)'}}>lift</span></span>
          </Link>
        </div>

        <nav className="nav-links">
          <Link to="/">Shop</Link>
          <a href="/#categories">Categories</a>
          <a href="#">Track order</a>
          <a href="#">For businesses</a>
        </nav>

        <div className="nav-right">
          <Link to="/checkout" className="cart-link" aria-label="Cart">
            <ShoppingCart size={20} />
            <span style={{marginLeft: '8px', fontSize: '14px'}}>Cart ({cartCount})</span>
          </Link>
          <button className="btn btn-outline" style={{padding: '8px 16px', marginLeft: '16px', borderColor: 'rgba(255,255,255,0.2)', color: 'white'}}>Sign in</button>
          <button className="mobile-menu-btn" aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
