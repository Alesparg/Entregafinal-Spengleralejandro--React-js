import {BsCartFill} from 'react-icons/bs'
import React, { useState } from 'react';

import './styles.css';

const CartWidget = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleIncrement = () => {
    setCartItemCount(cartItemCount + 1);
  };

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i> 
      <button onClick={handleIncrement}>Añadir al carrito</button>
      {cartItemCount > 0 && (
        <span className="cart-notification">
          <div><BsCartFill></BsCartFill></div>
          {cartItemCount} {''} <div>productos</div>
          <div>
           
          </div>
        </span>

      )}
    </div>
  );
};

export default CartWidget;
