import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity, selectTotalAmount, selectTotalQuantity } from './CartSlice.jsx';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQuantity = useSelector(selectTotalQuantity);
  const [message, setMessage] = useState('');

  const calculateTotalCost = (item) => item.cost * item.quantity;

  return (
    <main className="cart">
      <h2>Your Cart</h2>
      <div className="cart-summary">
        <p>
          <strong>{totalQuantity}</strong> {totalQuantity === 1 ? 'plant' : 'plants'} in your cart
        </p>
        <p className="cart-total">Total: ${totalAmount.toFixed(2)}</p>
      </div>

      {items.length === 0 && (
        <p className="empty">Your cart is empty. Pick a few plants to get started.</p>
      )}

      <div className="cart-list">
        {items.map((item) => (
          <article key={item.name} className="cart-card">
            <img src={item.image} alt={item.name} />
            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>Unit price: ${item.cost}</p>
              <div className="qty">
                <button
                  aria-label={`Decrease ${item.name}`}
                  onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))}
                >
                  &minus;
                </button>
                <span>{item.quantity}</span>
                <button
                  aria-label={`Increase ${item.name}`}
                  onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))}
                >
                  +
                </button>
              </div>
              <p className="subtotal">Subtotal: ${calculateTotalCost(item).toFixed(2)}</p>
            </div>
            <button className="delete-button" onClick={() => dispatch(removeItem(item.name))}>
              Delete
            </button>
          </article>
        ))}
      </div>

      <div className="cart-actions">
        <button className="secondary-button" onClick={onContinueShopping}>
          Continue Shopping
        </button>
        <button className="get-started-button" onClick={() => setMessage('Checkout is coming soon!')}>
          Checkout
        </button>
      </div>
      {message && <p className="message" role="status">{message}</p>}
    </main>
  );
}

export default CartItem;
