import { Link } from "react-router-dom";
import { productos } from "../../productos";
import './styles.css'
const Item = ({ id, nombre, precio, descripcion, imgUrl }) => {

  const handleClick = (event) => {
    //parametro event captura el evento sintetico
    //Detiene el comportamiento por default
    event.preventDefault()
    // Detiene la propagacion de los eventos por defaults de sus padres
    event.stopPropagation()

    console.log(id, nombre, precio , descripcion)
  }

  





  return (
    <div className="a">
      <img  src={imgUrl} />
      <article className="carta ">
      <h1 className="carta__titulo">{nombre}</h1>
      <p className="carta__descripcion">{descripcion}</p>

      <p>{precio}</p>
      
      
      <Link className="precio__verde" to={`/item/${id}`}>Ver detalle</Link>
      </article>
    </div>
  );
};

export default Item;