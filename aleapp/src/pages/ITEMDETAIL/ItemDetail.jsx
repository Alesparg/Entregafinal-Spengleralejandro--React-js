import Item from '../../components/ITEM/Item'
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Layout from "../../components/Layout/Layout";
import CartWidget from '../../components/CARWIDGET/Carwidget';
import { CartCtx } from "../../context/CartContext";
import { db } from "../../DB/db"
import { doc, getDoc} from "firebase/firestore"
import './styles.css'








    
const ItemDetail = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useContext(CartCtx)

  

  useEffect(() => {

    const productRef = doc(db, "productos", idProduct)

    getDoc(productRef).then((response)=>{
      if(response.exists()){

        const product = {id: response.id, ...response.data() }
        setProduct(product)
        setIsLoading(false)
      }else{
        console.log("el producto no existe")
      }
    })

  }, [idProduct]);
   
   

 
    
  
    return (
      <Layout>
      {isLoading ? (
        <p>Cargando . .</p>
      ) : (
        <>
         <article className='carta'>
        <small>Stock: {product.stock}</small>
        <h1 className='carta__titulo'>{product.nombre}</h1> <br />
        <img className='url imagen__final' src={product.urlImage} alt={product.nombre} />
        <h2 className='carta__descripcion'>Descripción: {product.descripcion}</h2> <br />
        <h3 className='precio__verde'>Precio: ${product.precio}</h3> <br />
        
  
        <h2>
          Ir a <Link to={"/"}>Home</Link>
        </h2>
        <button onClick={() => addToCart(product.id)}>Añadir al carrito</button>
      </article>
        </>
      )}
    </Layout>
    )
}





export default ItemDetail