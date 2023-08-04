import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import './Cards.css'


const Cards = () => {
  const components = useSelector((state) => state.allComponents);


  return (
    <div className='cards'>
      {components.map(({ img, modelo, precio, tipo, id }) => (
        <Card
        key={id}
          id={id}
          img={img}
          modelo={modelo}
          precio={precio}
          tipo={tipo}
        />
      ))}
    </div>
  );
};

export default Cards;