import { createContext, useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../DB/db";

export const CartCtx = createContext();

const CartContext = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null); // Producto seleccionado
  const [cart, setCart] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [listProducts, setListProducts] = useState([]);


  const clearCart = () => {
    setCart([]);
  };

  // Cargar la lista de productos desde Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "productos");
      const productsQuery = query(productsCollection, where("stock", ">", 0)); // Opcional: Puedes filtrar los productos por stock, por ejemplo
      const productsSnapshot = await getDocs(productsQuery);


      

      const productsData = [];
      productsSnapshot.forEach((doc) => {
        productsData.push({ id: doc.id, ...doc.data() });
      });

      setCart([]); // Limpiar el carrito al cargar productos
      setSelectedProduct(null); // Limpiar la selección de producto
      setListProducts(productsData);
      setLoadingProducts(false);
    };

    fetchProducts();
  }, []); // Ejecuta esto solo una vez al montar el componente

  // Agregar un producto al carrito
  const addToCart = (idProduct) => {
    const productToAdd = listProducts.find((product) => product.id === idProduct);
    if (productToAdd) {
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }
  };

  return (
    <CartCtx.Provider value={{ listProducts, selectedProduct, setSelectedProduct, cart, setCart, addToCart, loadingProducts, clearCart }}>
      {children}
    </CartCtx.Provider>
  );
};

export default CartContext;
