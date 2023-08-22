import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { removeFromCart, emptyCart } from '../../redux/actions';
import style from './Carrito.module.css';
import { NavLink } from 'react-router-dom';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

const Carrito = () => {

  const cartItems = useSelector((state) => state.cartItems);
  console.log(cartItems);
  const dispatch = useDispatch();

  const [preferenceId, setPreferenceId] = useState(null)
  initMercadoPago('TEST-0fbd33da-2e66-4c43-934e-20958a309dee');

  function obtenerUsuario() {
    const usuarioJSON = localStorage.getItem('usuario');
    return usuarioJSON ? JSON.parse(usuarioJSON): null;
  }
  const user = obtenerUsuario();

  const createPreference = async () => {
    try {
      const componentes = cartItems.map((item) => ({
        title: item.modelo,
        unit_price:
          Number(item.precio) /
          cartItems.filter((cartItem) => cartItem.modelo === item.modelo)
            .length,
        quantity: cartItems.filter(
          (cartItem) => cartItem.modelo === item.modelo
        ).length,
      }));
      let objComp = {};
      objComp.componentes = componentes;
      objComp.user = user;
      console.log(objComp);
      const response = await axios.post(
        "http://localhost:3001/payment",
        objComp
      );

      const { id } = response.data;
      console.log(id);
      return id;
    } catch (error) {
      console.log(error);
    }
  };
  const handleBuy  = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

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
          <button className={style.vaciarCarrito} onClick={handleEmptyCart}> <i class='bx bxs-trash-alt'></i>Vaciar Carrito</button>
        )}
      </div>
      <div className={style.carritoContainer}>
        <div className={style.validacion}>
        {cartItems.length === 0 ? (
          <h4 className={style.mensaje}>❌ ¡No hay productos en el carrito! ❌</h4>
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
      </div>
      <div className={style.contenedorPrecio}>
        <p className={style.precio}>Total: ${totalPrice.toFixed(2)}</p>
      </div>
      <div className={style.botonesFinales}>

          <div className={style.contenedorBuy}>
              <button className={style.buy} onClick={handleBuy}>Comprar</button>
              {preferenceId && <Wallet initialization={{ preferenceId }} />}
          </div>
          <div className={style.botonContenedor}>
            <NavLink className={style.boton} to='/componentes'>
              Seguir Comprando
            </NavLink>
          </div>

      </div>
    </div>
  );
};

export default Carrito;