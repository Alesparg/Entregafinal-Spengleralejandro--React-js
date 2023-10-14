import React, { useState, useEffect } from 'react';
import { db } from '../../DB/db'; // Importa la instancia de Firebase
import { collection, query, where, getDocs } from "firebase/firestore"; // Importa funciones de Firebase Firestore

function Dropdown() {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  useEffect(() => {
    async function fetchData() {
      const productosRef = collection(db, 'productos');
      const q = query(productosRef, where('categoria', '==', categoriaSeleccionada));

      try {
        const querySnapshot = await getDocs(q);

        const products = [];
        querySnapshot.forEach((doc) => {
          products.push({ id: doc.id, ...doc.data() });
        });

        setProductos(products);
      } catch (error) {
        console.error("Error al recuperar los productos:", error);
      }
    }

    fetchData();
  }, [categoriaSeleccionada]);

  const handleCategoriaChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
  };

  return (
    <div>
      <select value={categoriaSeleccionada} onChange={handleCategoriaChange}>
        <option value="">Los productos que vendemos</option>
        <option value="Consola">Consola</option>
        <option value="Mandos">Mandos</option>
        <option value="Portatiles">Portátiles</option>
      </select>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;         





















