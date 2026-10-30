import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem.jsx';
import { useCart } from '../context/CartContext.jsx';
import { formatINR } from '../utils/currency.js';

export default function Cart() {
  const { cart, subtotal, tax, total } = useCart();

  return (
    <section className="page-shell page-content">
      <div className="page-title cart-title"><p className="eyebrow">Your picks</p><h1>Your bag</h1></div>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your bag is taking a little breather.</p>
          <Link className="button button-dark" to="/products">Explore the collection <span>→</span></Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-list">{cart.map((item) => <CartItem key={item.id} item={item} />)}</div>
          <aside className="order-summary">
            <h2>Order summary</h2>
            <div className="summary-row"><span>Subtotal</span><span>{formatINR(subtotal)}</span></div>
            <div className="summary-row"><span>Estimated tax (8%)</span><span>{formatINR(tax)}</span></div>
            <div className="summary-row total-row"><strong>Total</strong><strong>{formatINR(total)}</strong></div>
            <button type="button" className="button button-dark checkout-button" onClick={() => window.alert('Thanks for shopping with ShopNest! Checkout is coming soon.')}>Continue to checkout</button>
            <Link className="underlined-link continue-link" to="/products">Continue shopping</Link>
          </aside>
        </div>
      )}
    </section>
  );
}
