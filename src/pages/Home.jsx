import React from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Truck, ShieldCheck, Zap } from 'lucide-react';
import './Home.css';

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Shop global products, <br/><span className="highlight">delivered to Kigali</span></h1>
            <p className="hero-subtitle">
              From China to your doorstep — phones, fashion, beauty, electronics and more. Pay with MTN MoMo or Airtel.
            </p>
            <div className="hero-cta">
              <a href="#featured" className="btn btn-primary hero-btn">Shop now</a>
              <a href="#how-it-works" className="btn btn-outline hero-btn">Track my order</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
              alt="Global Shipping" 
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="trust-section">
        <div className="container trust-container">
          <div className="trust-item">
            <Truck size={32} className="trust-icon" />
            <div>
              <h4 className="trust-title">Deliver anywhere in Rwanda</h4>
              <p className="trust-desc">15-35 days delivery</p>
            </div>
          </div>
          <div className="trust-item">
            <ShieldCheck size={32} className="trust-icon" />
            <div>
              <h4 className="trust-title">Buyer protection on all orders</h4>
              <p className="trust-desc">Safe & secure</p>
            </div>
          </div>
          <div className="trust-item">
            <Zap size={32} className="trust-icon" />
            <div>
              <h4 className="trust-title">MTN MoMo & Airtel accepted</h4>
              <p className="trust-desc">Local payments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="categories-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Shop by category</h2>
          </div>
          <div className="categories-grid">
            {categories.map(category => (
              <div key={category.id} className="category-card">
                <img src={category.image} alt={category.name} className="category-image" loading="lazy" />
                <div className="category-overlay">
                  <h3 className="category-name">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="featured-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured products</h2>
            <a href="#" className="view-all-link">See all <ArrowRight size={16} /></a>
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
