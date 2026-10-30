import React, { useMemo, useState } from 'react';
import CategoryFilter from '../components/CategoryFilter.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import { ErrorState, LoadingState } from '../components/LoadState.jsx';
import { useCart } from '../context/CartContext.jsx';

export default function Products() {
  const { products, loading, error } = useCart();
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const filteredProducts = useMemo(() => products.filter((product) => (
    (category === 'All' || product.category === category)
    && product.name.toLowerCase().includes(search.trim().toLowerCase())
  )), [products, category, search]);

  return (
    <section className="page-shell page-content">
      <div className="page-title">
        <p className="eyebrow">Find your new favorite</p>
        <h1>The collection</h1>
        <p>Little upgrades for the everyday.</p>
      </div>
      <div className="catalog-controls">
        <CategoryFilter activeCategory={category} onChange={setCategory} />
        <label className="search-field">
          <span className="sr-only">Search products</span>
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search the collection" />
          <span aria-hidden="true">⌕</span>
        </label>
      </div>
      {loading ? <LoadingState /> : error ? <ErrorState message={error} /> : <ProductGrid products={filteredProducts} />}
    </section>
  );
}
