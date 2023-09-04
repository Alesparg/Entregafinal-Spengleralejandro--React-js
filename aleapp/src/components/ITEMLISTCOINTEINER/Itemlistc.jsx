import React, { useState } from 'react';
import './styles.css'
const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='dropdown'>
      <label htmlFor="dropdown">Que deseas comprar:</label>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Selecciona lo que quieres</option>
        <option value="juegos">Juegos</option>
        <option value="consolas">Consolas</option>
        <option value="mandos">Mandos</option>
        <option value="otros">Otros objetos</option>
      </select>
      {selectedOption && (
        <p>Has seleccionado: {selectedOption}</p>
      )}
    </div>
  );
};

export default Dropdown;
