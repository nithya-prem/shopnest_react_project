import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { ErrorState, LoadingState } from '../components/LoadState.jsx';
import { formatINR } from '../utils/currency.js';

export default function ProductDetail() {
  const { id } = useParams();
  const { products, loading, error, addToCart } = useCart();
  const product = products.find((item) => String(item.id) === id);

  if (loading) return <section className="page-shell page-content"><LoadingState /></section>;
  if (error) return <section className="page-shell page-content"><ErrorState message={error} /></section>;
  if (!product) return <section className="page-shell page-content"><p className="notice">We couldn’t find that product. <Link to="/products">Browse the collection</Link>.</p></section>;

  return (
    <section className="page-shell page-content">
      <Link className="back-link" to="/products">← Back to the collection</Link>
      <div className="product-detail">
        <div className="detail-image"><img src={product.imageUrl} alt={product.name} /></div>
        <div className="detail-copy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <div className="detail-rating">★ {product.rating} <span>Customer rated</span></div>
          <p className="detail-price">
            {formatINR(product.price)}
            {product.originalPrice > product.price && <span className="original-price">{formatINR(product.originalPrice)}</span>}
          </p>
          <p className="detail-description">
            A considered everyday essential, chosen for its quality, thoughtful details, and lasting usefulness. A lovely addition to your collection or a thoughtful gift for someone special.
          </p>
          <button className="button button-dark add-detail-button" type="button" onClick={() => addToCart(product)}>Add to bag <span>＋</span></button>
          <p className="shipping-note">Complimentary delivery on orders over {formatINR(75)}.</p>
        </div>
      </div>
    </section>
  );
}
