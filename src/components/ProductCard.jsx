import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { formatINR } from '../utils/currency.js';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-link" aria-label={`View ${product.name}`}>
        <img src={product.imageUrl} alt={product.name} loading="lazy" />
      </Link>
      <div className="product-card-content">
        <p className="eyebrow">{product.category}</p>
        <Link to={`/products/${product.id}`} className="product-name">{product.name}</Link>
        <div className="product-card-bottom">
          <span className="price-group">
            <span className="price">{formatINR(product.price)}</span>
            {product.originalPrice > product.price && <span className="original-price">{formatINR(product.originalPrice)}</span>}
          </span>
          <button className="text-button" type="button" onClick={() => addToCart(product)}>Add to bag +</button>
        </div>
      </div>
    </article>
  );
}
