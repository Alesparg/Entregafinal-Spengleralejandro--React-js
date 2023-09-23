import React from 'react';
import './styles.css'
import { Link } from "react-router-dom";

function Producto({ id, imagenSrc, titulo, descripcion, precioSinIva }) {
  return (
    <article className="carta border border-5">
      <div className="carta__header">
       
        <img src={imagenSrc} alt="" />
      </div>
      <h2 className="carta__titulo">{titulo}</h2>
      <p className="carta__descripcion">{descripcion}</p>
      {precioSinIva && <p className="precio__verde">Precio  {precioSinIva}</p>}
      <button onClick={() => addToCart(id)}>Añadir al carrito</button>
      <button onClick={() => onClickVerDetalle}>Ver detalle</button>
    </article>
  );
}

function Cartaconsola() {
  // Función para manejar la acción de añadir al carrito (aún no está implementada)
  const addToCart = (productId) => {
    // Aquí puedes agregar la lógica para añadir el producto al carrito
    console.log(`Producto añadido al carrito con ID: ${productId}`);
  };

  return (
    <section className="precio__carta">
      <div>
        <Producto
          id={1}
          imagenSrc="/src/imagenes/PS5.jpg"
          titulo="Playstation 5"
          descripcion="La PlayStation 5 es una consola de última generación con potente rendimiento gráfico, tiempos de carga ultrarrápidos y audio 3D inmersivo. Ofrece una amplia variedad de juegos exclusivos, retrocompatibilidad con la PS4 y soporte para ray tracing. Una consola para cualquier edad"
          precioSinIva="$500000"
        />
     
      </div>

      <div>
        <Producto
          id={2}
          imagenSrc="/src/imagenes/XBOX .jpg"
          titulo="Xbox serie X"
          descripcion="La Xbox Series X, lanzada en noviembre de 2020, es la consola insignia de Microsoft. Ofrece un rendimiento de alta gama con gráficos 4K, velocidad de cuadro fluida y compatibilidad con ray tracing. Su arquitectura personalizada y SSD permiten tiempos de carga ultrarrápidos incomprables en el mercado."
          precioSinIva="$400000"
        />
      </div>

      <div>
        <Producto
          id={3}
          imagenSrc="/src/imagenes/NINTENDO.jpg"
          titulo="Nintendo Switch"
          descripcion="La Nintendo Switch es una consola híbrida lanzada en 2017. Combina juegos portátiles y en casa. Ofrece títulos icónicos de Nintendo y una biblioteca diversa. Su versatilidad y controles Joy-Con permiten múltiples modos de juego. También tiene opciones multijugador local y en línea."
          precioSinIva="$300000"
        />
      </div>

      <div>
        <Producto
          id={4}
          imagenSrc="/src/imagenes/Retros.jpg"
          titulo="Retro Classic 8 Bit"
          descripcion="La Retro Classic 8 Bit es una consola de videojuegos nostálgica que rinde homenaje a la era de los 8 bits. Ofrece una biblioteca de juegos clásicos preinstalados, controles estilo vintage y una experiencia de juego retro auténtica. Revive la magia de los títulos icónicos de la década de 1980 con esta consola compacta y divertida."
          precioSinIva="$70000"
        />
      </div>
    </section>
  );
}





function Producto2({ imagenSrc, titulo, descripcion, precioSinIva }) {
  return (
    <article className="carta border border-5">
      <div className="carta__header">
        <img src={imagenSrc} alt="" />
      </div>
      <h2 className="carta__titulo">{titulo}</h2>
      <p className="carta__descripcion">{descripcion}</p>
      <p className="precio__verde">Precio {precioSinIva}</p>
      <button onClick={() => addToCart(id)}>Añadir al carrito</button>
    </article>
  );
}

function Cartamando() {
  // Función para manejar la acción de añadir al carrito (aún no está implementada)
  const addToCart = (productId) => {
    // Aquí puedes agregar la lógica para añadir el producto al carrito
    console.log(`Producto añadido al carrito con ID: ${productId}`);
  };

  return (
    <section className="precio__carta">
      <div>
        <Producto2
          imagenSrc="/src/imagenes/M5.jpg"
          titulo="Mando PS5"
          descripcion="El mando de la PS5, llamado DualSense, presenta un diseño ergonómico futurista con retroalimentación háptica inmersiva y gatillos adaptables. Incluye un panel táctil, altavoz integrado y una batería duradera para experiencias de juego envolventes."
          precioSinIva="$50000"
          id={5}
        />
      </div>

      <div>
        <Producto2
          imagenSrc="/src/imagenes/mx.jpg"
          titulo="Mando Xbox serie X"
          descripcion="El controlador de Xbox Series X ofrece un diseño robusto y ergonómico, con gatillos texturizados y un cómodo agarre. Incorpora tecnología háptica, botones compartidos, conectividad Bluetooth y una batería de larga duración para experiencias de juego inmersivas."
          precioSinIva="$40000"
          id={6}
        />
      </div>

      <div>
        <Producto2
          imagenSrc="/src/imagenes/mi (1).jpg"
          titulo="Mandos Nintendo Switch"
          descripcion="El mando de Nintendo Switch, llamado Joy-Con, es compacto y versátil. Ofrece controles de movimiento, vibración HD, un botón de captura, y se puede usar como dos controladores individuales o acoplarse a la consola para el juego en modo portátil."
          precioSinIva="$20000"
          id={7}
        />
      </div>

      <div>
        <Producto2
          imagenSrc="/src/imagenes/p4xb.jpg"
          titulo="Mandos de PS4 Y de XBOX"
          descripcion="El mando de PS4, DualShock 4, es ergonómico con panel táctil, sensor de movimiento y altavoz. El controlador de Xbox One es robusto, con gatillos vibrantes y precisos. Ambos admiten auriculares y vibración inmersiva. Puedes comprar los dos o uno solo"
          precioSinIva="$30000"
          id={8}
        />
      </div>
    </section>
  );
}



function Producto3({ imagenSrc, titulo, descripcion, precioSinIva }) {
  return (
    <article className="carta border border-5">
      <div className="carta__header">
        <img src={imagenSrc} alt="" />
      </div>
      <h2 className="carta__titulo">{titulo}</h2>
      <p className="carta__descripcion">{descripcion}</p>
      <p className="precio__verde">Precio  {precioSinIva}</p>
      <button onClick={() => addToCart(id)}>Añadir al carrito</button>
    </article>
  );
}

function Cartaportatil() {
  // Función para manejar la acción de añadir al carrito (aún no está implementada)
  const addToCart = (productId) => {
    // Aquí puedes agregar la lógica para añadir el producto al carrito
    console.log(`Producto añadido al carrito con ID: ${productId}`);
  };

  return (
    <section className="precio__carta">
      <div>
        <Producto3
          imagenSrc="/src/imagenes/nf15.jpeg"
          titulo="Portatil Asus f15"
          descripcion="El portátil ASUS F15 es un dispositivo versátil que ofrece un equilibrio sólido entre rendimiento y portabilidad. Sus características clave incluyen un potente procesador Intel o AMD, hasta 16 GB de RAM, y opciones de almacenamiento SSD para una ejecución rápida de aplicaciones. La pantalla de 15.6 pulgadas ofrece una calidad visual nítida, mientras que la duración de la batería garantiza una jornada de trabajo prolongada. Además, cuenta con una amplia variedad de puertos, incluyendo USB-C y HDMI, para una conectividad versátil."
          precioSinIva="$1000000"
          id={9}
        />
      </div>

      <div>
        <Producto3
          imagenSrc="/src/imagenes/nrazer.jpg"
          titulo="Portátil Gamer Blade 15"
          descripcion="El portátil Gamer Blade 15 se destaca por su rendimiento de juego excepcional, impulsado por potentes procesadores Intel o AMD y tarjetas gráficas de alta gama, como las GeForce RTX de Nvidia. Ofrece hasta 32 GB de RAM para una multitarea sin problemas y opciones de almacenamiento SSD ultrarrápido. La pantalla de 15.6 pulgadas, con frecuencias de actualización de hasta 240Hz, brinda una experiencia visual inmersiva, mientras que el teclado retroiluminado y personalizable y un diseño delgado y elegante lo hacen ideal para los jugadores exigentes."
          precioSinIva="$800000"
          id={10}
        />
      </div>

      <div>
        <Producto3
          imagenSrc="/src/imagenes/alix17.jpg"
          titulo="Portátil Alienware X17"
          descripcion="El portátil Alienware X17 es una verdadera bestia para juegos. Está equipado con potentes procesadores Intel Core de última generación y tarjetas gráficas NVIDIA RTX de alto rendimiento, lo que garantiza un rendimiento excepcional en juegos. Su pantalla ofrece una experiencia visual impresionante con una alta resolución y una frecuencia de actualización rápida. Además, cuenta con opciones de almacenamiento SSD ultrarrápido y una amplia gama de características para satisfacer las necesidades de los jugadores más exigentes."
          precioSinIva="$700000"
          id={11}
        />
      </div>

      <div>
        <Producto3
          imagenSrc="/src/imagenes/hpomen.jpg"
          titulo="Portátil HP Omen X 2S"
          descripcion="El portátil HP Omen X 2S se destaca por su innovadora pantalla secundaria integrada en el teclado, que ofrece una experiencia de juego única. Viene equipado con potentes procesadores Intel o AMD y tarjetas gráficas NVIDIA RTX para un rendimiento de juego de alto nivel. Además, cuenta con una pantalla principal de alta resolución y frecuencia de actualización para una inmersión total. Las opciones de almacenamiento SSD y la refrigeración eficiente completan las características de este portátil gaming de HP el cual es uno de los mejores del mercado."
          precioSinIva="$670000"
          id={12}
        />
      </div>
    </section>
  );
}

const DetalleProducto = ({ producto }) => {
  if (!producto) {
    return null; // Si no hay producto seleccionado, no muestra nada
  }

  return (
    <div className="detalle">
      <h2>Detalle del producto</h2>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
    </div>
  );
};









export { Cartaconsola, Cartamando, Cartaportatil, DetalleProducto };

