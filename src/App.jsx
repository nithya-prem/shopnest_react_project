import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Cart from './pages/Cart.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="page-shell"><p className="notice">That page could not be found.</p></div>} />
        </Routes>
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} ShopNest</span>
        <span>Thoughtful finds for everyday living.</span>
      </footer>
    </>
  );
}
