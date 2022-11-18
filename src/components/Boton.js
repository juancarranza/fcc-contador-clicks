import React from 'react';
import '../styles/Boton.css';

const Boton = ({ texto, esBotonClick, manejarClick }) => {
  return (
    <button
      className={ esBotonClick ? "btn-click" : "btn-reiniciar" }
      onClick={ manejarClick }
    >
      {texto}
    </button>
  );
};

export default Boton;