import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';


const Card = ({ id, img, modelo, precio }) => {

  return (
    <div className='cardd'>
      <div>
        <NavLink to={`/componentes/${id}`}>
          <h3 >{modelo}</h3>
          <img  src={img} alt={modelo} />
          <p >Precio: ${precio}</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
