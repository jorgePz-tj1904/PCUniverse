import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart} from '../../redux/actions';
import style from './Card.module.css';



const Card = ({ id, img, modelo, precio }) => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const [loged, setLoged]=useState(false);

  useEffect(()=>{
    changeLogin()
  },[]);

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  const changeLogin=async()=>{
    const storedValue  = await localStorage.getItem('login');
    const isUserLoggedIn = storedValue === 'true';
    setLoged(isUserLoggedIn);
  }

  return (
    <div className={style.cardd}>
        <NavLink to={`/componentes/${id}`}>
          <h3>{modelo}</h3>
          <img  src={img} alt={modelo} />
        </NavLink>
          <p id={style.precio}>Precio: ${precio}</p>
          {loged?(cartItems.some((item) => item.id === id) ? (
              <p id={style.succes}><i class='bx bx-check'></i></p>
              ) : (
                <div>
                  <button id={style.botones} onClick={() => handleAddToCart(id)}>
                Añadir al carrito
              </button>
                </div>
            )):(
              <h3>Inicia sesión para poder comprar este producto. <i className='bx bxs-error-alt'></i></h3>
            )}
       </div>
             );
           };
           
export default Card;
