// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import Card from '../Card/Card';
// import { addToCart } from '../../redux/actions'; // Importa la acción para agregar al carrito
// import './Cards.css'


// const Cards = () => {
//   const components = useSelector((state) => state.allComponents);
//   console.log(components);
//   const cartItems = useSelector((state) => state.cartItems);
//   const dispatch = useDispatch();

//   const handleAddToCart = (id) => {
//     // Dispatch de la acción para agregar al carrito
//     dispatch(addToCart(id));
//   };


//   return (
//     <div className='cards'>
//       {components.map(({ img, modelo, precio, tipo, id }) => (
//         <div key={id}>
//                   <Card
//                     id={id}
//                     img={img}
//                     modelo={modelo}
//                     precio={precio}
//                     tipo={tipo}
//                   />
                 
        
//                   {cartItems.some((item) => item.id === id) ? (
//                     <p className='succes'>Ya está en el carrito</p>
//                   ) : (
//                     <button className='boton' onClick={() => handleAddToCart(id)}>Añadir al carrito</button>
//                   )}
        
//                   </div>
                
//               ))}
//             </div>
//           );
//         };
        
//         export default Cards;




import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { addToCart } from '../../redux/actions'; // Importa la acción para agregar al carrito
import './Cards.css'


const Cards = () => {
  const components = useSelector((state) => state.allComponents);
  const cartItems = useSelector((state) => state.cartItems);
    const dispatch = useDispatch();
  
    const handleAddToCart = (id) => {
      // Dispatch de la acción para agregar al carrito
      dispatch(addToCart(id));
    };


  return (
    <div className='cards'>
      {components.map(({ img, modelo, precio, tipo, id }) => (
        <div key={id}>
                  <Card
                    id={id}
                    img={img}
                    modelo={modelo}
                    precio={precio}
                    tipo={tipo}
                  />
                 
        
                  {cartItems.some((item) => item.id === id) ? (
                    <p className='succes'>Ya está en el carrito</p>
                  ) : (
                    <button className='boton' onClick={() => handleAddToCart(id)}>Añadir al carrito</button>
                  )}
        
                  </div>
                
              ))}
            </div>
  );
};

export default Cards;