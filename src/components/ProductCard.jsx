import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, LogIn } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const formattedPrice = new Intl.NumberFormat('rw-RW', {
    style: 'currency',
    currency: 'RWF',
    minimumFractionDigits: 0
  }).format(product.price);

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        <div className="delivery-badge">{product.delivery}</div>
      </div>
      
      <div className="product-info">
        <span className="product-category-label">
          {product.category.replace('-', ' ').toUpperCase()}
        </span>
        <h3 className="product-title">{product.name}</h3>
        
        <div className="product-price-row">
          <span className="price">{formattedPrice}</span>
        </div>
        
        <div className="product-actions">
          <button 
            className="btn btn-primary add-to-cart-btn" 
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} /> Add
          </button>
          
          <Link 
            to={`/checkout`} 
            className="btn btn-secondary buy-now-btn"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
