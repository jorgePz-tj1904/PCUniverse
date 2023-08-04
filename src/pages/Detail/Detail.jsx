import React from 'react'
import axios from 'axios'
import Header from '../Home/Header'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import data from '../../../DB.json'
import logo from "../../assets/logo.png";
import style from './Detail.module.css'

// const URL = "http://localhost:3001/components"


function Detail() {
  
      const {id} = useParams();
  
      const [components, setComponents] = useState({});
  
      useEffect(() => {
          axios(`http://localhost:3001/componentes/${id}`).then(({data}) => {
              if(data) {
                  setComponents(data);
              } else {
                  window.alert("No se encuentra disponible")
              }
          })
      }, [id]);
  
  return (
    <div className={style.contenedor}>
         {components.modelo && (
           <div>
          <img className={style.imagen} src={components.img} alt='' />
         <div className={style.contenedorInfo}>
          <h1>Modelo: {components.modelo}</h1>
          <h4>Categoria: {components.categoria}</h4>
         </div>
         <div className={style.cartaPrecio}>
          <p className={style.letra}>Precio</p>
          <p className={style.precio}>${components.precio}</p>
         </div>
         <div className={style.garantias}>
        <i class='bx bxs-truck'>   Envio Gratis</i>
        <i class='bx bx-check'>   Stock Disponible</i>
        <i class='bx bx-shield-quarter'>  Con garantias</i>
        </div>
            <button className={style.buy}>Añadir al carrito</button>
            <p className={style.descripcion}>ESPECIFICACIONES: </p>

          {/* Renderizar todas las especificaciones */}
          <div className={style.especificaciones}>
            {components.especificaciones && Object.entries(components.especificaciones).map(([key, value]) => (
              <h2 className={style.info} key={key}>
                <p className={style.letrasEspe}>{key}:</p> {value}
              </h2>
            ))}
          
          </div>
          <div className={style.logo}>
            <img src={logo}/>
            <img className={style.logo2} src={logo}/>
          </div>
          <NavLink className={style.back} to="/">
          Home
      </NavLink>
      
        {/* Carrusel */}
        <footer className="footer">
      <p>Si tenés sugerencias o comentarios</p>
      <a href="/contactanos">Contactanos</a>
      <p>© 2023 PC Universe. Todos los derechos reservados.</p>
    </footer>
        </div>
      )}
    </div>
  )
}

export default Detail





 
 