import React from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductGrid({ products }) {
  if (!products.length) return <p className="notice">No products match this category yet.</p>;
  return <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>;
}
