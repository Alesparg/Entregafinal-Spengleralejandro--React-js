import Item from '../../components/ITEM/Item'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productos } from "../../productos";
import Layout from "../../components/Layout/Layout";
import CartWidget from '../../components/CARWIDGET/Carwidget'
import './styles.css'







    
const ItemDetail = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  

  const searchProduct = productos.find(
    (prod) => prod.id === parseInt(idProduct)
  );

  useEffect(() => {
    setTimeout(() => {
      console.log(searchProduct);
      setProduct(searchProduct);
      setIsLoading(false);
    }, 1000);
  }, []);
   
   

 
    
  
    return (
      <Layout>
      {isLoading ? (
        <p>Cargando . .</p>
      ) : (
        <>
        <article className='carta'>
        <small>Stock:{product.stock}</small>
          <h1 className='carta__titulo'>{product.nombre}</h1> <br />
          <img className='url imagen__final' src={product.urlImage} />
          <h2 className='carta__descripcion'>Descripcion:{product.descripcion}</h2> <br />
          <h3 className='precio__verde'>Precio:${product.precio}</h3> <br />
          
          
          <h2>
            ir a <Link to={"/"}>Home</Link>
          </h2>
          <div><CartWidget /> </div>
          </article>
        </>
      )}
    </Layout>
    )
}





export default ItemDetail