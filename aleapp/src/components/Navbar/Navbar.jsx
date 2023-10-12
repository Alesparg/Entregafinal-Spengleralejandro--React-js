import './styles.css'
import Dropdown from '../ITEMLISTCOINTEINER/Itemlistc'
import CartWidget from '../CARWIDGET/Carwidget'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
          <a href="/"> 
  <img className="imagenlogo" src="../src/imagenes/logito.jpg" alt="Logo" />
</a>

          
           
            <div >
            <section className='container'>
                <div className='titulo'>
                
                🎮Mundo Gamer🎮

                </div>
               
                
                
               
            </section>
            </div>
            <div className='contenedors'>
               
            

            <div className='item'> Ir a <Link to={'/'} >Inicio</Link> </div> 
            <div className='item'> Ir a <Link to={'/Checkout'} >Crea una cuenta</Link> </div>
            <Link to={'/cart'}>
      <CartWidget/>
      </Link>
         
            </div>
           
        </div>
    )
}




const NavbarHome = () => {
    return (
        <div className="navbar">
           <img className='imagenlogo' src='../src/imagenes/logito.jpg' />
          
           
            <div className='titulo'>
                🎮Mundo Gamer🎮
            </div>
            <div className='contenedors'>
                <section className='parrafos'>

            <Dropdown />

            <div> Ir a <Link to={'/Checkout'} >Crear una cuenta</Link> </div>
            
            </section>
            </div>
           
        </div>
    )
}


const NavbarCheck = () => {
    return (
        <div className="navbar">
           <a href="/"> 
  <img className="imagenlogo" src="../src/imagenes/logito.jpg" alt="Logo" />
</a>
          
           
            <div className='titulo'>
                🎮Mundo Gamer🎮
            </div>
            <div className='contenedors'>
                <section className='parrafos'>
            

            <div> Ir a la pagina de <Link to={'/'} >Inicio</Link> </div>
            
            </section>
            </div>
           
        </div>
    )
}

export { Navbar, NavbarHome, NavbarCheck };










