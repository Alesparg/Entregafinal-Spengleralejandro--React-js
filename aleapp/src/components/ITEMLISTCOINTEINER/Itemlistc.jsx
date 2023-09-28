import React, { useState } from 'react';
import './styles.css'
import { productos } from "../../productos";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    
   
    if (value) {
      const element = document.getElementById(value);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  

  return (
    <div className='dropdown'>
      <label htmlFor="dropdown">Productos que vendemos:</label>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Ver lo que tenemos</option>
        <option value="consolas">Consolas</option>
        <option value="mandos">Mandos</option>
        <option value="portatiles">Portátiles</option>
        <option value="otros">Proximamente mas</option>
      </select>
      
   

      {selectedOption && (
        <p>Has seleccionado: {selectedOption}</p>
      )}
    </div>
  );
};
export default Dropdown;



