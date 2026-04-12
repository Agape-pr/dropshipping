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
            <h1 className="hero-title">Shop Smart. <br/><span className="highlight">Buy Global.</span></h1>
            <p className="hero-subtitle">
              Your trusted partner for importing high-quality goods direct from China to Kigali. Fast, safe, and affordable dropshipping.
            </p>
            <div className="hero-cta">
              <a href="#featured" className="btn btn-primary hero-btn">Start Shopping</a>
              <a href="#how-it-works" className="btn btn-outline hero-btn">Learn More</a>
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
              <h4 className="trust-title">Reliable Delivery</h4>
              <p className="trust-desc">10-20 days direct to Kigali</p>
            </div>
          </div>
          <div className="trust-item">
            <ShieldCheck size={32} className="trust-icon" />
            <div>
              <h4 className="trust-title">Secure Payments</h4>
              <p className="trust-desc">MTN MoMo supported</p>
            </div>
          </div>
          <div className="trust-item">
            <Zap size={32} className="trust-icon" />
            <div>
              <h4 className="trust-title">Quality Sourced</h4>
              <p className="trust-desc">Verified global suppliers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="categories-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Shop by Category</h2>
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
            <h2 className="section-title">Featured Products</h2>
            <a href="#" className="view-all-link">View All <ArrowRight size={16} /></a>
          </div>
          
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
