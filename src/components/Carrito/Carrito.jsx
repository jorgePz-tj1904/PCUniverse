import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { removeFromCart, emptyCart } from '../../redux/actions';
import style from './Carrito.module.css';
import { NavLink } from 'react-router-dom';

const Carrito = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();


  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleEmptyCart = () => {
    dispatch(emptyCart()); 
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.precio, 0);

  return (
    <div className={style.contenedor}>
      <h2 className={style.title}>Carrito de Compras</h2>
      <NavLink className={style.atras} to='/componentes'>
        <i className='bx bx-left-arrow-alt'></i>
      </NavLink>
      <div className={style.vaciar}>
        {cartItems.length > 0 && (
          <button className={style.vaciarCarrito} onClick={handleEmptyCart}> ♻️Vaciar Carrito</button>
        )}
      </div>
      <div className={style.carritoContainer}>
        {cartItems.length === 0 ? (
          <p className={style.mensaje}>No hay productos en el carrito</p>
        ) : (
          <div className={style.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={style.cartItem}>
                <Card
                  id={item.id}
                  img={item.img}
                  modelo={item.modelo}
                  precio={item.precio}
                  tipo={item.tipo}
                />
                <button className={style.delete} onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <p className={style.precio}>Total: ${totalPrice.toFixed(2)}</p>
      <NavLink className={style.boton} to='/componentes'>
        Seguir Comprando
      </NavLink>
    </div>
  );
};

export default Carrito;
