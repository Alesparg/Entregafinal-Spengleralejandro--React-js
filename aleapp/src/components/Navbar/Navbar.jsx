import './styles.css'
import Dropdown from '../ITEMLISTCOINTEINER/Itemlistc'
import CartWidget from '../CARWIDGET/Carwidget'

const Navbar = () => {
    return (
        <div className="navbar">
           <img className='imagenlogo' src='../src/imagenes/logito.jpg' />
          
           
            <div className='titulo'>
                🎮Mundo Gamer🎮
            </div>
            <div className='contenedor'>
            

            <div><Dropdown /></div>
            <div><CartWidget /> </div>
            </div>
           
        </div>
    )
}

export default Navbar










