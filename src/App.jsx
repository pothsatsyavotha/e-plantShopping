import React, { useState } from 'react';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import AboutUs from './AboutUs.jsx';
import Navbar from './Navbar.jsx';
import './App.css';

function App() {
  // 'home' | 'plants' | 'cart'
  const [page, setPage] = useState('home');

  if (page === 'home') {
    return (
      <div className="landing-page">
        <div className="landing-content">
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="tagline">Where green meets home</p>
          <AboutUs />
          <button className="get-started-button" onClick={() => setPage('plants')}>
            Get Started
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar page={page} onNavigate={setPage} />
      {page === 'plants' ? (
        <ProductList />
      ) : (
        <CartItem onContinueShopping={() => setPage('plants')} />
      )}
    </div>
  );
}

export default App;
