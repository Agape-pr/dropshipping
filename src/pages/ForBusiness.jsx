import React from 'react';
import './ForBusiness.css';
import { Briefcase, Link as LinkIcon, Truck, Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';

const ForBusiness = () => {
  return (
    <div className="business-page">
      {/* Hero Section */}
      <section className="business-hero">
        <div className="container business-hero-content">
          <div className="business-badge">Empowering Entrepreneurs</div>
          <h1 className="business-title">Build Your Dream Business With <span className="highlight-text">Low Capital</span></h1>
          <p className="business-subtitle">
            Ambition shouldn't be constrained by lack of capital. We connect you directly to manufacturers in China, handle all the heavy lifting, and deliver straight to Kigali.
          </p>
          <div className="business-cta">
            <a href="mailto:support@isooko.rw" className="btn btn-primary">Partner With Us</a>
            <Link to="/" className="btn btn-outline" style={{borderColor: 'rgba(255,255,255,0.3)', color: 'white'}}>Explore Products</Link>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="business-features section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">How We Help You Win</h2>
            <p className="section-desc">Cut out the middlemen. We give you direct access to source and sell efficiently.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <LinkIcon size={32} className="feature-icon" />
              </div>
              <h3>Direct Manufacturer Access</h3>
              <p>We connect you directly to verified factories and manufacturers in China, bypassing local agents who inflate prices.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Scissors size={32} className="feature-icon" />
              </div>
              <h3>Cut Middlemen Costs</h3>
              <p>Maximize your profit margins. By removing unnecessary intermediaries, you get the absolute best wholesale pricing possible.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Briefcase size={32} className="feature-icon" />
              </div>
              <h3>Start with Low Capital</h3>
              <p>You don't need a massive budget to start. Order exactly what you need without unrealistic minimum order quantities.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Truck size={32} className="feature-icon" />
              </div>
              <h3>End-to-End Logistics</h3>
              <p>We handle all shipping, customs, and logistics. You just place the order, and we deliver the products safely to you in Rwanda.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="business-bottom-cta">
        <div className="container text-center">
          <h2>Ready to revolutionize your supply chain?</h2>
          <p>Join hundreds of Rwandan entrepreneurs sourcing smartly with isooko.</p>
          <a href="mailto:support@isooko.rw" className="btn btn-primary mt-2">Get Started Today</a>
        </div>
      </section>
    </div>
  );
};

export default ForBusiness;
