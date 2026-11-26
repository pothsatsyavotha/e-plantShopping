import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from './CartSlice.jsx';

function Navbar({ page, onNavigate }) {
  const totalQuantity = useSelector(selectTotalQuantity);
  const link = (key, label) => (
    <button
      className={`nav-link ${page === key ? 'active' : ''}`}
      onClick={() => onNavigate(key)}
    >
      {label}
    </button>
  );

  return (
    <header className="navbar">
      <button className="brand" onClick={() => onNavigate('home')}>
        <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 29V15" stroke="#e8b43c" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M16 17C8 17 5 11 5 5c8 0 11 5 11 12Z" fill="#8fc7a2" />
          <path d="M16 20c6 0 10-4 11-10-7 0-11 4-11 10Z" fill="#5b9a77" />
        </svg>
        <span>
          Paradise Nursery
          <small>Where green meets home</small>
        </span>
      </button>
      <nav className="nav-links">
        {link('home', 'Home')}
        {link('plants', 'Plants')}
        {link('cart', 'Cart')}
        <button
          className="cart-icon"
          onClick={() => onNavigate('cart')}
          aria-label={`Shopping cart, ${totalQuantity} items`}
        >
          <svg width="30" height="30" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
            <path d="M216 40H40V16a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h8v168a24 24 0 0 0 24 24h12.7a28 28 0 1 0 54.6 0h38.8a28 28 0 1 0 54.5 0H216a8 8 0 0 0 0-16H72a8 8 0 0 1-8-8v-24h152a16 16 0 0 0 16-13.7l12-84A16 16 0 0 0 216 40Z" opacity=".0"/>
            <path d="M96 216a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm88-16a16 16 0 1 0 16 16 16 16 0 0 0-16-16ZM231.8 64.7l-20.5 96A16 16 0 0 1 195.6 174H84.4a16 16 0 0 1-15.7-12.7L46.4 56H24a8 8 0 0 1 0-16h22.4a16 16 0 0 1 15.7 12.7L65.4 72H216a16 16 0 0 1 15.8 16.7Z"/>
          </svg>
          <span className="cart-count">{totalQuantity}</span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
