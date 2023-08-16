import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, applyPriceOrder, filterProductsByCategory, getAllComponents} from '../../redux/actions';
import style from './Card.module.css';



const Card = ({ id, img, modelo, precio }) => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  return (
    <div className={style.cardd}>
        <NavLink to={`/componentes/${id}`}>
          <h3>{modelo}</h3>
          <img  src={img} alt={modelo} />
        </NavLink>
          <p id={style.precio}>Precio: ${precio}</p>
          {cartItems.some((item) => item.id === id) ? (
              <p id={style.succes}><i class='bx bx-check'></i></p>
              ) : (
                <div>
                  <button id={style.botones} onClick={() => handleAddToCart(id)}>
                Añadir al carrito
              </button>
                </div>
            )}
    </div>
  );
};

export default Card;
