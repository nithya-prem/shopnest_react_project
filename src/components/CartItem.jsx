import React from 'react';
import { useCart } from '../context/CartContext.jsx';
import { formatINR } from '../utils/currency.js';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <article className="cart-item">
      <img src={item.imageUrl} alt="" />
      <div className="cart-item-info">
        <p className="eyebrow">{item.category}</p>
        <h2>{item.name}</h2>
        <p className="price">{formatINR(item.price)}</p>
        <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
          <button type="button" aria-label="Decrease quantity" onClick={() => updateQuantity(item.id, -1)}>−</button>
          <span>{item.quantity}</span>
          <button type="button" aria-label="Increase quantity" onClick={() => updateQuantity(item.id, 1)}>+</button>
        </div>
      </div>
      <div className="cart-item-end">
        <strong>{formatINR(item.price * item.quantity)}</strong>
        <button className="remove-button" type="button" onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </article>
  );
}
