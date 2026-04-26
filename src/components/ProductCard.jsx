import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
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
        {product.image ? (
          <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        ) : (
          <div className="product-placeholder"></div>
        )}
      </div>
      
      <div className="product-info">
        <div className="product-badge">Hot</div>
        <h3 className="product-title">{product.name}</h3>
        
        <div className="product-price-row">
          <div>
            <span className="price">{formattedPrice}</span>
            <span className="old-price">RWF {(product.price * 1.5).toLocaleString()}</span>
          </div>
          <button 
            className="add-btn-circle" 
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
