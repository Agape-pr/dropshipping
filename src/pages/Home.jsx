import React from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Smartphone, Heart, ShoppingBag, Monitor, Home as HomeIcon, CheckCircle, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">Rwanda's #1 import store</div>
            <h1 className="hero-title">Shop global products, <br/><span className="highlight-text">delivered to Kigali</span></h1>
            <p className="hero-subtitle">
              From China to your doorstep — phones, fashion, beauty, electronics and more. Pay with MTN MoMo or Airtel.
            </p>
            <div className="hero-cta">
              <a href="#featured" className="btn btn-primary hero-btn">Shop now</a>
              <a href="#track" className="btn btn-outline hero-btn" style={{borderColor: 'rgba(255,255,255,0.3)', color: 'white'}}>Track my order</a>
            </div>
          </div>
          <div className="hero-stats-card">
            <p className="stats-title">Store at a glance</p>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>5K+</h3>
                <p>Products</p>
              </div>
              <div className="stat-item">
                <h3>200+</h3>
                <p>Orders</p>
              </div>
            </div>
            <div className="stats-footer">
              <div className="pulse-dot"></div>
              <p>Shipping to all Rwanda — 15-35 days delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="trust-section">
        <div className="container trust-container">
          <div className="trust-item"><CheckCircle size={18} className="trust-icon" /> <span>MTN MoMo & Airtel accepted</span></div>
          <div className="trust-item"><CheckCircle size={18} className="trust-icon" /> <span>Buyer protection on all orders</span></div>
          <div className="trust-item"><CheckCircle size={18} className="trust-icon" /> <span>Real-time order tracking</span></div>
          <div className="trust-item"><CheckCircle size={18} className="trust-icon" /> <span>Deliver anywhere in Rwanda</span></div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="categories-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Shop by category</h2>
            <a href="#" className="view-all-link">View all</a>
          </div>
          <div className="categories-grid-new">
            <div className="category-card-new active">
              <Smartphone size={32} className="cat-icon" />
              <h3>Phones</h3>
              <p>1,240 items</p>
            </div>
            <div className="category-card-new">
              <Heart size={32} className="cat-icon" />
              <h3>Beauty</h3>
              <p>890 items</p>
            </div>
            <div className="category-card-new">
              <ShoppingBag size={32} className="cat-icon" />
              <h3>Fashion</h3>
              <p>2,100 items</p>
            </div>
            <div className="category-card-new">
              <Monitor size={32} className="cat-icon" />
              <h3>Electronics</h3>
              <p>650 items</p>
            </div>
            <div className="category-card-new">
              <HomeIcon size={32} className="cat-icon" />
              <h3>Home</h3>
              <p>430 items</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="featured-section section-padding" style={{paddingTop: '0'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured products</h2>
            <a href="#" className="view-all-link">See all</a>
          </div>
          
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Entrepreneur Banner */}
      <section className="entrepreneur-section section-padding" style={{paddingTop: '0'}}>
        <div className="container">
          <div className="entrepreneur-banner">
            <div className="entrepreneur-content">
              <div className="badge-blue">For entrepreneurs</div>
              <h2>Start your business with RWF 200,000</h2>
              <p>Buy wholesale from China — low capital, real margins</p>
            </div>
            <a href="#" className="btn btn-outline" style={{borderColor: 'rgba(255,255,255,0.3)', color: 'white'}}>Learn more</a>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="payment-methods section-padding" style={{paddingTop: '0'}}>
        <div className="container">
          <h3 className="payment-title">Accepted payment methods</h3>
          <div className="payment-grid">
            <div className="payment-card"><span className="dot yellow"></span> MTN Mobile Money</div>
            <div className="payment-card"><span className="dot red"></span> Airtel Money</div>
            <div className="payment-card"><span className="dot blue"></span> Visa card</div>
            <div className="payment-card"><span className="dot red"></span> Mastercard</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
