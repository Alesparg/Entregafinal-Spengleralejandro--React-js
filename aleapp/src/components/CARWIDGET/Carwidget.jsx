import React, { useState } from 'react';
import './styles.css';

const CartWidget = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleIncrement = () => {
    setCartItemCount(cartItemCount + 1);
  };

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i> {/* Ícono del carrito */}
      <button onClick={handleIncrement}>Añadir al carrito</button>
      {cartItemCount > 0 && (
        <span className="cart-notification">
          <div>Tiene en su carrito:</div>
          {cartItemCount} {''} <div>productos</div>
        </span>
      )}
    </div>
  );
};

export default CartWidget;
