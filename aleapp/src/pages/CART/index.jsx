import React, { useContext } from 'react';
import { CartCtx } from '../../context/CartContext';
import Layout from '../../components/Layout/Layout';

const Cart = () => {
  const { cart: cartProducts } = useContext(CartCtx);

  // Función para calcular el total de la compra
  const calculateTotal = () => {
    let total = 0;
    cartProducts.forEach((product) => {
      total += product.precio * product.quantity;
    });
    return total;
  };

  // Función para obtener la fecha actual
  const getCurrentDate = () => {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('es-ES', options);
  };

  // Función para calcular la fecha de entrega (7 días después de la compra)
  const getDeliveryDate = () => {
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 7);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return deliveryDate.toLocaleDateString('es-ES', options);
  };

  return (
    <Layout>
      <div>
        {!cartProducts.length ? (
          <h1>No tienes productos en tu carrito</h1>
        ) : (
          <div>
            {cartProducts.map((product) => (
              <h3 key={product.id}>
                {product.nombre}
                {product.quantity > 1 ? ` (x${product.quantity})` : ''}: Precio: ${product.precio * product.quantity}
              </h3>
            ))}
            <h4>Total de la compra: ${calculateTotal()}</h4>
            <p>Fecha de compra: {getCurrentDate()}</p>
            <p>Fecha de entrega: {getDeliveryDate()}</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Cart;







