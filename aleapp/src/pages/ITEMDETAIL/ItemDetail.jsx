import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Navbar, NavbarHome } from '../../components/Navbar/Navbar'
import { Cartaconsola, Cartamando, Cartaportatil, DetalleProducto} from '../../components/ITEMDETAILCOINTEINER.jsx/Itemdetailc'

import './styles.css'





    
const ItemDetail = () => {
  

 
    
  
    

    
    



    return (
        <main>
           
            <header>
                <Navbar />
            </header>
            <p className='parrafo'>"Mundo Gamer" es la elección definitiva para todos los apasionados del mundo de los videojuegos y la tecnología. En nuestro local online, te sumergirás en una experiencia única que ofrece consolas de última generación, mandos de alta precisión y computadoras de alto rendimiento, todo bajo un mismo techo. ¿Por qué somos la mejor opción? Porque en "Mundo Gamer," creemos en la variedad y la calidad. Ofrecemos una amplia gama de consolas, desde Xbox y PlayStation hasta Nintendo Switch, para satisfacer las preferencias de cada jugador. Nuestros mandos ergonómicos mejoran tu precisión y comodidad en el juego, mientras que nuestras computadoras gaming te permiten disfrutar de mundos virtuales con un rendimiento impecable. La satisfacción del cliente es nuestra máxima prioridad, respaldada por garantías sólidas y políticas de devolución flexibles. Además, nuestro equipo de expertos en tecnología está siempre a tu disposición para brindarte asesoramiento personalizado. Con opciones de envío rápido y seguro, precios competitivos y un sitio web intuitivo, "Mundo Gamer" se convierte en el destino definitivo para tus necesidades de gaming y tecnología. Únete a nuestra comunidad de gamers y descubre la diferencia en cada producto que ofrecemos unicos en Argentina y en america latina. "Mundo Gamer" eleva tu experiencia de juego al siguiente nivel, donde la calidad, la pasión y la innovación se fusionan en un solo lugar.</p>



            <section> 
  <h1 id='consolas' className='titulo__secundario'>Consolas</h1>
</section>
<Cartaconsola />

<h1 id='mandos' className='titulo__secundario'>Mandos</h1>
<Cartamando />

<h1 id='portatiles' className='titulo__secundario'>Portatiles</h1>
<Cartaportatil />



           
  
  
  
  
  
  

  
  
  
  
        </main>
    )
}





export default ItemDetail