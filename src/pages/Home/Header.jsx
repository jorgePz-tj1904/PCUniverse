import React from 'react';
import style from './Header.module.css'
import logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';

//headerr

const Header=()=>{
    return(
    <div>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <div className={style.navbar}>
      <NavLink to={'/'}>
      <img src={logo} alt="Logo" className={style.logo} />
      </NavLink>
        <SearchBar/>
        <NavLink className={style.nav} to='/carrito'>
          <button className={style.navbarButton}>
            <i class='bx bxs-cart'></i>
          </button>
        </NavLink>
      <button className={style.navbarButton}>
      <i class='bx bxs-log-in'></i>
      </button>
        {/* Agrega aquí el formulario de inicio de sesión */}
      </div>

      {/* Barra de navegación */}
      <nav className={style.mainNav}>
        <ul>
        <li><NavLink to='/componentes'>PRODUCTOS</NavLink></li>
          <li><NavLink to='/form'>ARMA TU PC</NavLink></li>
          <li><NavLink to='/ayuda'>AYUDA</NavLink></li>
          <li><NavLink>CONTACTANOS</NavLink></li>
          <li><NavLink>OFERTAS</NavLink></li>
          <li><NavLink to='/nosotros'>¿QUIENES SOMOS?</NavLink></li>
        </ul>
      </nav>
    </div>
    )
};

export default Header;