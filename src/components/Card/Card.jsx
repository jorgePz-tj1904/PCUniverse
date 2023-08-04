import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, especificaciones, img, modelo, precio, categoria, tipo })   => {
  return (
    <div className="card">

    <Link to={`/detail/${id}`}>
      <img src={img} alt={modelo} />
      <h3>{modelo}</h3>
    </Link>
      <p></p>

      <p>Precio: ${precio}</p>
      <p>{especificaciones}</p>
      <p>{categoria}</p>
     { tipo && tipo.length?(<p>{tipo}</p>): ""}

    </div>
  );
};

export default Card;