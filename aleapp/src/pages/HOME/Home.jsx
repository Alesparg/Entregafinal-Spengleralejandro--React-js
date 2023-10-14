import { Link } from "react-router-dom";
import { Navbar, NavbarHome, NavbarCheck }  from '../../components/Navbar/Navbar'
import Item from '../../components/ITEM/Item'
import ItemList from "../../components/ITEMLIST/Itemlist";
import React, { useEffect, useState, isLoading, useContext } from "react";
import { CartCtx } from "../../context/CartContext";
import { useParams} from "react-router-dom";
import { Ring } from "@uiball/loaders";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../DB/db"

import './styles.css'

const Child = React.memo(({ mensaje }) => {
  console.log('Renderización de Child');
  return <div>{mensaje}</div>;
});

const ChildNoMemo = ({ mensaje }) => {
  console.log('Renderización de Child NO MEMO');
  return <div>{mensaje}</div>;
}


const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const { setListProducts } = useContext(CartCtx);
  const [product, setProduct] = useState([]);
  const [message, setMessage] = useState(0)
  const { idProduct } = useParams();
  

  useEffect(() => {

    const productsRef = collection(db, "productos")

    getDocs(productsRef).then((response)=>{

      const productsFirebase = response.docs.map((product)=>(
        {id: product.id, ...product.data() }
      ))
      setProduct(productsFirebase)
      setLoading(false)
    })

    const q = query(productsRef, where("categoria", "==", "Mandos"))

    getDocs(q).then((response)=>{

      const productsFirebase = response.docs.map((product)=>(
        {id: product.id, ...product.data()}
      ))
      console.log(productsFirebase);
    })





  
      
  }, [idProduct]);

  const config = isLoading ? {
    className: 'desactivate'
  } : {}



    return (
    
        <main>
            <header>
               <NavbarHome />
                

            </header>
            <section className="parrafo">
            <p>¡Bienvenidos a Mundo Gamer, tu destino definitivo para todo lo relacionado con el apasionante mundo de los videojuegos! En Mundo Gamer, creemos firmemente que los videojuegos no son solo una forma de entretenimiento, sino una verdadera forma de vida. Permítenos guiarte a través de un viaje emocionante que te llevará a descubrir por qué somos la mejor opción para tus necesidades en cuanto a consolas, mandos y accesorios.</p>
            <p>1. Variedad inigualable: En Mundo Gamer, ofrecemos una selección incomparable de consolas de última generación, mandos de alta calidad y accesorios esenciales. Ya sea que seas un jugador de consola o de PC, encontrarás todo lo que necesitas para llevar tu experiencia de juego al siguiente nivel.</p>
            <p>2. Calidad garantizada: Entendemos que la calidad es fundamental para los gamers exigentes. Por eso, nos asociamos con las mejores marcas y fabricantes para ofrecerte productos de primera categoría que cumplen con los más altos estándares de rendimiento y durabilidad.</p>
            <p>3. Asesoramiento experto: Nuestro equipo de expertos en videojuegos está aquí para ayudarte en cada paso del camino. Ya sea que necesites orientación sobre la elección de la consola adecuada o consejos sobre cómo mejorar tu experiencia de juego, estamos listos para brindarte la asistencia que necesitas.</p>
            <p>4. Precios competitivos: En Mundo Gamer, creemos que la pasión por los videojuegos no debe romper el banco. Ofrecemos precios competitivos y promociones especiales para que puedas disfrutar de tus juegos favoritos sin preocuparte por los costos.</p>
            <p>5. Envío rápido y seguro: Sabemos que no puedes esperar para sumergirte en tus juegos, por lo que garantizamos envíos rápidos y seguros para que puedas disfrutar de tus compras en tiempo récord.</p>
            <p>6. Comunidad apasionada: En Mundo Gamer, no solo vendemos productos, también construimos una comunidad de gamers apasionados. Únete a nosotros en las redes sociales y participa en eventos especiales, sorteos y discusiones emocionantes sobre videojuegos.</p>
            </section>

          
        <h1 className="np">Nuestros productos:</h1>
        <section>
            
      






<ItemList className='as'>
          {isLoading && <Ring />}
          {!isLoading && product.map((prod) => (
            <Item
              key={prod.id}
              id={prod.id}
              nombre={prod.nombre}
              descripcion={prod.descripcion}
            />
          ))}
        </ItemList>
      
      </section>
    





        </main>
       
    )
}

export default Home