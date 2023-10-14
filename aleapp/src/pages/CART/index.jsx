import React, { useContext, useState  } from 'react';
import { CartCtx   } from '../../context/CartContext';
import Layout from '../../components/Layout/Layout';
import { addDoc } from 'firebase/firestore';
import { ordenCollections } from '../../DB/db';
import './styles.css'

const Cart = () => {
  const { cart: cartProducts, clearCart } = useContext(CartCtx);
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  const handleClearCart = () => {
    clearCart();
    setIsCartEmpty(true); // Marcar el carrito como vacío
  };
  

  

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

  const [orderId, setOrderId] = useState(null);
  const order = {
    comprador: { nombre: "pepe", telefono: "2349848", email: "pepito@gmail.com" },
    compra: cartProducts.map((product) => ({
      id: product.id,
      nombre: product.nombre,
      precio: product.precio,
    })),
    total: calculateTotal(), // Puedes usar la función que ya tienes para calcular el total
  };
  

  const createOrderInFirebase = () => {
    addDoc(ordenCollections, order)
      .then((docRef) => {
        setOrderId(docRef.id); // Establece el ID en el estado
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <div className='todo'>
        {!cartProducts.length ? (
          <h1>No tienes productos en tu carrito</h1>
        ) : (
          <div>
            {cartProducts.map((product) => (
              <h3 className='producto' key={product.id}>
                {product.nombre}
                {product.quantity > 1 ? ` (x${product.quantity})` : ''}: Precio: ${product.precio * product.quantity}
              </h3>
            ))}
            <h4 className='total' >Total de la compra: ${calculateTotal()}</h4>
            <p className='fechas' >Fecha de compra: {getCurrentDate()}</p>
            <p className='fechas' >Fecha de entrega: {getDeliveryDate()}</p>
            <button className='botonc' onClick={createOrderInFirebase}>Finalizar Compra</button>
            {!isCartEmpty && <button className='botonc' onClick={handleClearCart}>Vaciar Carrito</button>}
            {orderId && <p className='id'>ID de la compra: {orderId}</p>}
          </div>
          
        )}
      </div>
    </Layout>
  );
}

export default Cart;







