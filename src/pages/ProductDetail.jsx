import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ShoppingCart, Truck, ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="container product-not-found">
        <h2>Product not found</h2>
        <Link to="/" className="btn btn-primary">Return to Home</Link>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('rw-RW', {
    style: 'currency',
    currency: 'RWF',
    minimumFractionDigits: 0
  }).format(product.price);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <div className="product-detail-page bg-light pb-5">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={20} /> Back
        </button>

        <div className="product-detail-container">
          {/* Image Section */}
          <div className="product-image-section">
            <div className="main-image-wrapper">
              <img src={product.image} alt={product.name} className="main-image" />
              <div className="delivery-badge-large">{product.delivery} Delivery</div>
            </div>
          </div>

          {/* Info Section */}
          <div className="product-info-section">
            <span className="category-label">{product.category.replace('-', ' ').toUpperCase()}</span>
            <h1 className="product-name">{product.name}</h1>
            
            <div className="price-container">
              <span className="current-price">{formattedPrice}</span>
              <span className="tax-info">Tax Included. Direct to Kigali.</span>
            </div>

            <div className="product-description card-box">
              <h3>About this item</h3>
              <p>{product.description}</p>
            </div>

            <div className="action-buttons">
              <button onClick={handleAddToCart} className="btn btn-outline btn-large w-100 mb-1 flex justify-center align-center font-bold" style={{ gap: '10px' }}>
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <button onClick={handleBuyNow} className="btn btn-primary btn-large w-100 font-bold" style={{ fontSize: '1.1rem' }}>
                Buy Now
              </button>
            </div>

            {/* Trust and Delivery Info */}
            <div className="info-boxes">
              <div className="info-box">
                <Truck size={24} className="info-icon" />
                <div className="info-text">
                  <h4>Delivery to Kigali</h4>
                  <p>Estimated arrival: <b>{product.delivery}</b></p>
                </div>
              </div>

              <div className="info-box">
                <ShieldCheck size={24} className="info-icon" />
                <div className="info-text">
                  <h4>Secure Payment</h4>
                  <p>Pay safely via MTN MoMo</p>
                </div>
              </div>

              <div className="info-box">
                <CheckCircle2 size={24} className="info-icon" />
                <div className="info-text">
                  <h4>Quality Guarantee</h4>
                  <p>Checked before shipping to Rwanda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
