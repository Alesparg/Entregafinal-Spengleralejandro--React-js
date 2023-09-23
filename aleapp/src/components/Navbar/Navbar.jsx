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
               
                
                
                <div className='item'> Ir a <Link to={'/'} >Inicio</Link> </div> 
            <div className='item'> Ir a <Link to={'/Checkout'} >Crea una cuenta</Link> </div>
            </section>
            </div>
            <div className='contenedor'>
               
            

            <div><Dropdown /></div>
            <div><CartWidget /> </div>
         
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
            <div className='contenedor'>
                <section className='parrafos'>
            

            <div> Ir a <Link to={'/Checkout'} >Crear una cuenta</Link> </div>
            <div> Ir a <Link to={'/product/2233'} >Ver nuestros productos</Link> </div>
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
            <div className='contenedor'>
                <section className='parrafos'>
            

            <div> Ir a <Link to={'/'} >Inicio</Link> </div>
            <div> Ir a <Link to={'/product/2233'} >Ver nuestros productos</Link> </div>
            </section>
            </div>
           
        </div>
    )
}

export { Navbar, NavbarHome, NavbarCheck };










