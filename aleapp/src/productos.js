import React from 'react';

import { Link } from "react-router-dom";

export const productos = [
  
  {
    id: 0,
    nombre: "Playstation 5",
    precio: 500000,
    categoria: "Consola",
    stock: 5,
    descripcion: "La PlayStation 5 es una consola de última generación con potente rendimiento gráfico, tiempos de carga ultrarrápidos y audio 3D inmersivo. Ofrece una amplia variedad de juegos exclusivos, retrocompatibilidad con la PS4 y soporte para ray tracing. Una consola para cualquier edad",
    urlImage: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-F.webp'
  },
  {
    id: 1,
    nombre: "Xbox serie X",
    precio: 400000,
    categoria: "Consola",
    stock: 10,
    descripcion: "La Xbox Series X, lanzada en noviembre de 2020, es la consola insignia de Microsoft. Ofrece un rendimiento de alta gama con gráficos 4K, velocidad de cuadro fluida y compatibilidad con ray tracing. Su arquitectura personalizada y SSD permiten tiempos de carga ultrarrápidos incomprables en el mercado",
    urlImage: 'https://http2.mlstatic.com/D_NQ_NP_718831-MLA70799537227_072023-F.webp'
  },
  {
    id: 2,
    nombre: "Nintendo Switch",
    precio: 300000,
    categoria: "Consola",
    stock: 8,
    descripcion: "La Nintendo Switch es una consola híbrida lanzada en 2017. Combina juegos portátiles y en casa. Ofrece títulos icónicos de Nintendo y una biblioteca diversa. Su versatilidad y controles Joy-Con permiten múltiples modos de juego. También tiene opciones multijugador local y en línea.",
    urlImage: 'https://http2.mlstatic.com/D_NQ_NP_770676-MLA32731813622_112019-F.webp'
  },
  {
    id: 3,
    nombre: "Retro Classic 8 Bit",
    precio: 70000,
    categoria: "Consola",
    stock: 2,
    descripcion: "La Retro Classic 8 Bit es una consola de videojuegos nostálgica que rinde homenaje a la era de los 8 bits. Ofrece una biblioteca de juegos clásicos preinstalados, controles estilo vintage y una experiencia de juego retro auténtica. Revive la magia de los títulos icónicos de la década de 1980 con esta consola compacta y divertida.",
    urlImage: 'https://i.pinimg.com/1200x/bd/71/bf/bd71bf446a79861e555e265350838f80.jpg'
  },
  {
    id: 4,
    nombre: "Mando PS5",
    precio: 50000,
    categoria: "Mandos",
    stock: 5,
    descripcion: "El mando de la PS5, llamado DualSense, presenta un diseño ergonómico futurista con retroalimentación háptica inmersiva y gatillos adaptables. Incluye un panel táctil, altavoz integrado y una batería duradera para experiencias de juego envolventes.",
    urlImage: 'https://http2.mlstatic.com/D_NQ_NP_923331-MLA53060866458_122022-F.webp'
  },
  {
    id: 5,
    nombre: "Mando Xbox serie X",
    precio: 40000,
    categoria: "Mandos",
    stock: 10,
    descripcion: "El controlador de Xbox Series X ofrece un diseño robusto y ergonómico, con gatillos texturizados y un cómodo agarre. Incorpora tecnología háptica, botones compartidos, conectividad Bluetooth y una batería de larga duración para experiencias de juego inmersivas.",
    urlImage: 'https://http2.mlstatic.com/D_NQ_NP_962443-MLA54147001760_032023-F.webp'
  },
  {
    id: 6,
    nombre: "Mandos Nintendo Switch",
    precio: 30000,
    categoria: "Mandos",
    stock: 6,
    descripcion: "El mando de Nintendo Switch, llamado Joy-Con, es compacto y versátil. Ofrece controles de movimiento, vibración HD, un botón de captura, y se puede usar como dos controladores individuales o acoplarse a la consola para el juego en modo portátil.",
    urlImage: 'https://http2.mlstatic.com/D_NQ_NP_696294-MLA45384706427_032021-F.webp'
  },
  {
    id: 7,
    nombre: "Mandos de PS4 Y de XBOX",
    precio: 30000,
    categoria: "Mandos",
    stock: 10,
    descripcion: "El mando de PS4, DualShock 4, es ergonómico con panel táctil, sensor de movimiento y altavoz. El controlador de Xbox One es robusto, con gatillos vibrantes y precisos. Ambos admiten auriculares y vibración inmersiva. Puedes comprar los dos o uno solo",
    urlImage: 'https://www.enter.co/wp-content/uploads/2013/06/microsoft-xbox-one-vs-sony-ps4-controles-660x432.jpg'
  },
  {
    id: 8,
    nombre: "Portatil Asus f15",
    precio: 900000,
    categoria: "Portatiles",
    stock: 15,
    descripcion: "El portátil ASUS F15 es un dispositivo versátil que ofrece un equilibrio sólido entre rendimiento y portabilidad. Sus características clave incluyen un potente procesador Intel o AMD, hasta 16 GB de RAM, y opciones de almacenamiento SSD para una ejecución rápida de aplicaciones. La pantalla de 15.6 pulgadas ofrece una calidad visual nítida, mientras que la duración de la batería garantiza una jornada de trabajo prolongada. Además, cuenta con una amplia variedad de puertos, incluyendo USB-C y HDMI, para una conectividad versátil.",
    urlImage: 'https://http2.mlstatic.com/D_NQ_NP_871799-MLU69667529920_052023-F.webp'
  },
  {
    id: 9,
    nombre: "Portátil Gamer Blade 15",
    precio: 800000,
    categoria: "Portatiles",
    stock: 15,
    descripcion: "El portátil Gamer Blade 15 se destaca por su rendimiento de juego excepcional, impulsado por potentes procesadores Intel o AMD y tarjetas gráficas de alta gama, como las GeForce RTX de Nvidia. Ofrece hasta 32 GB de RAM para una multitarea sin problemas y opciones de almacenamiento SSD ultrarrápido. La pantalla de 15.6 pulgadas, con frecuencias de actualización de hasta 240Hz, brinda una experiencia visual inmersiva, mientras que el teclado retroiluminado y personalizable y un diseño delgado y elegante lo hacen ideal para los jugadores exigentes.",
    urlImage: 'https://http2.mlstatic.com/D_NQ_NP_935883-MLA70179141807_062023-F.webp'
  },
  {
    id: 10,
    nombre: "Portátil Alienware X17",
    precio: 700000,
    categoria: "Portatiles",
    stock: 17,
    descripcion: "El portátil Alienware X17 es una verdadera bestia para juegos. Está equipado con potentes procesadores Intel Core de última generación y tarjetas gráficas NVIDIA RTX de alto rendimiento, lo que garantiza un rendimiento excepcional en juegos. Su pantalla ofrece una experiencia visual impresionante con una alta resolución y una frecuencia de actualización rápida. Además, cuenta con opciones de almacenamiento SSD ultrarrápido y una amplia gama de características para satisfacer las necesidades de los jugadores más exigentes.",
    urlImage: 'https://http2.mlstatic.com/D_NQ_NP_773382-MLA70743374737_072023-F.webp'
  },
  {
    id: 11,
    nombre: "Portátil HP Omen X 2S",
    precio: 670000,
    categoria: "Portatiles",
    stock: 25,
    descripcion: "El portátil HP Omen X 2S se destaca por su innovadora pantalla secundaria integrada en el teclado, que ofrece una experiencia de juego única. Viene equipado con potentes procesadores Intel o AMD y tarjetas gráficas NVIDIA RTX para un rendimiento de juego de alto nivel. Además, cuenta con una pantalla principal de alta resolución y frecuencia de actualización para una inmersión total. Las opciones de almacenamiento SSD y la refrigeración eficiente completan las características de este portátil gaming de HP el cual es uno de los mejores del mercado.",
    urlImage: 'https://http2.mlstatic.com/D_NQ_NP_813580-MLU70676993991_072023-F.webp'
  },
  
  


];











