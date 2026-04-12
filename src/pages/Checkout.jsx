import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, CreditCard, ArrowLeft, ShieldCheck, MapPin } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: 'Kigali'
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const total = getCartTotal();
  const formattedTotal = new Intl.NumberFormat('rw-RW', {
    style: 'currency',
    currency: 'RWF',
    minimumFractionDigits: 0
  }).format(total);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    
    setIsProcessing(true);
    
    // Simulate MTN MoMo API processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      clearCart();
    }, 2500);
  };

  if (showSuccess) {
    return (
      <div className="container checkout-success">
        <div className="success-card">
          <div className="success-icon-wrapper">
            <ShieldCheck size={48} className="success-icon" />
          </div>
          <h1>Payment Successful!</h1>
          <p>Thank you, {formData.fullName}. Your MTN MoMo payment of <strong>{formattedTotal}</strong> has been received.</p>
          <p className="order-number">Order #KGL-{Math.floor(Math.random() * 1000000)}</p>
          <div className="success-steps">
            <div className="step active"><span className="step-dot"></span>Order Confirmed</div>
            <div className="step"><span className="step-dot"></span>Processing in China</div>
            <div className="step"><span className="step-dot"></span>Shipping to Kigali (10-20 days)</div>
          </div>
          <button onClick={() => navigate('/')} className="btn btn-primary w-100 mt-2">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page bg-light pb-5">
      <div className="container">
        <div className="checkout-header">
          <button onClick={() => navigate(-1)} className="back-btn">
            <ArrowLeft size={20} /> Back to Cart
          </button>
          <h2>Checkout securely</h2>
        </div>

        <div className="checkout-container">
          <div className="checkout-form-section">
            <form onSubmit={handleCheckout} className="checkout-form card-box">
              <h3>Delivery Details (Kigali Only)</h3>
              
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  required 
                  placeholder="Jean Luc Nizeyimana"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number (MTN MoMo)</label>
                <div className="phone-input-wrapper">
                  <span className="phone-prefix">+250</span>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    placeholder="78X XXX XXX"
                    pattern="[0-9]{9}"
                    title="Please enter a valid 9-digit Rwandan number starting with 7"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Delivery Address</label>
                <div className="input-with-icon">
                  <MapPin size={18} className="input-icon" />
                  <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    required 
                    placeholder="e.g. KN 4 Ave, Insight Building, 3rd Floor"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" value="Kigali" disabled className="disabled-input" />
                <small className="form-hint">Currently delivering exclusively within Kigali.</small>
              </div>
            </form>
          </div>

          <div className="order-summary-section">
            <div className="order-summary card-box">
              <h3>Order Summary</h3>
              
              {cartItems.length === 0 ? (
                <div className="empty-cart-message">
                  <ShoppingCart size={32} className="text-light mb-1" />
                  <p>Your cart is empty.</p>
                  <button onClick={() => navigate('/')} className="btn btn-primary mt-1">Browse Products</button>
                </div>
              ) : (
                <>
                  <div className="cart-items-list">
                    {cartItems.map((item, index) => (
                      <div key={`${item.id}-${index}`} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                          <p className="cart-item-name">{item.name}</p>
                          <p className="cart-item-qty">Qty: {item.quantity}</p>
                        </div>
                        <div className="cart-item-price">
                          {(item.price * item.quantity).toLocaleString()} RWF
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="summary-totals">
                    <div className="summary-row">
                      <span>Subtotal</span>
                      <span>{formattedTotal}</span>
                    </div>
                    <div className="summary-row">
                      <span>International Shipping</span>
                      <span className="free-text">Free via Cargo</span>
                    </div>
                    <div className="summary-row total-row">
                      <span>Total</span>
                      <span>{formattedTotal}</span>
                    </div>
                  </div>

                  <button 
                    onClick={handleCheckout} 
                    disabled={cartItems.length === 0 || isProcessing || !formData.fullName || !formData.phone || !formData.address}
                    className={`btn btn-primary w-100 btn-large mt-2 pay-btn ${isProcessing ? 'processing' : ''}`}
                  >
                    <CreditCard size={20} />
                    {isProcessing ? 'Processing MoMo...' : `Pay ${formattedTotal} with MoMo`}
                  </button>
                  <p className="secure-payment-notice">
                    <ShieldCheck size={16} /> Payments securely processed via MTN Mobile Money.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
