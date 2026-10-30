import React from 'react';

const categories = ['All', 'Electronics', 'Clothing', 'Footwear', 'Books'];

export default function CategoryFilter({ activeCategory, onChange }) {
  return (
    <div className="category-filter" aria-label="Filter products by category">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-button${activeCategory === category ? ' active' : ''}`}
          type="button"
          aria-pressed={activeCategory === category}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
