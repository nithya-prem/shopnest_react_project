import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function Navbar() {
  const { itemCount } = useCart();

  return (
    <header className="navbar">
      <NavLink className="brand" to="/" aria-label="ShopNest home">
        shopnest<span>.</span>
      </NavLink>
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/products">Shop</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <NavLink className="cart-link" to="/cart">
        Bag <span className="cart-count">{itemCount}</span>
      </NavLink>
    </header>
  );
}
