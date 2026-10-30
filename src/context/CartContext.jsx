import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';

const CartContext = createContext(null);
const CART_STORAGE_KEY = 'shopnest_cart';

function readStoredCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(readStoredCart);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    const productsUrl = import.meta.env.VITE_PRODUCTS_API_URL || '/products.json';

    axios.get(productsUrl)
      .then(({ data }) => {
        if (!Array.isArray(data)) throw new Error('The products response was not a list.');
        if (active) setProducts(data);
      })
      .catch((fetchError) => {
        console.error('Unable to fetch products:', fetchError);
        if (active) setError('We couldn’t load products right now. Please try again in a moment.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id);
      return existing
        ? items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...items, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, change) => {
    setCart((items) => items
      .map((item) => item.id === productId ? { ...item, quantity: item.quantity + change } : item)
      .filter((item) => item.quantity > 0));
  };

  const removeFromCart = (productId) => {
    setCart((items) => items.filter((item) => item.id !== productId));
  };

  const clearCart = () => setCart([]);
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;

  const value = useMemo(() => ({
    cart, products, loading, error, itemCount, subtotal, tax, total: subtotal + tax,
    addToCart, updateQuantity, removeFromCart, clearCart,
  }), [cart, products, loading, error, itemCount, subtotal, tax]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider.');
  return context;
}
