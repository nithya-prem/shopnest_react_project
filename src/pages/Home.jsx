import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid.jsx';
import { ErrorState, LoadingState } from '../components/LoadState.jsx';
import { useCart } from '../context/CartContext.jsx';

export default function Home() {
  const { products, loading, error } = useCart();

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Good things, thoughtfully found</p>
          <h1>A little more joy in your everyday.</h1>
          <p>Discover useful, well-loved essentials for wherever life takes you.</p>
          <Link className="button button-dark" to="/products">Explore the collection <span>→</span></Link>
        </div>
        <div className="hero-image" role="img" aria-label="A thoughtfully curated collection of everyday products" />
        <span className="hero-note">Made for your everyday</span>
      </section>
      <section className="section page-shell">
        <div className="section-heading">
          <div><p className="eyebrow">The good stuff</p><h2>Customer favorites</h2></div>
          <Link className="underlined-link" to="/products">Shop all products →</Link>
        </div>
        {loading ? <LoadingState /> : error ? <ErrorState message={error} /> : <ProductGrid products={products.slice(0, 4)} />}
      </section>
    </>
  );
}
