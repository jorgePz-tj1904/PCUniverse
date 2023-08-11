import React, { useState } from 'react';
import style from './Header.module.css';
import logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import LoginForm from '../../pages/Login/LoginForm';

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLoginForm(!showLoginForm);
  };
  

  return (
    <div>
      <link
        href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
        rel='stylesheet'
      ></link>
      <div className={style.navbar}>
        <NavLink to={'/'}>
          <img src={logo} alt="Logo" className={style.logo} />
        </NavLink>
        <SearchBar />
        <button
          className={style.navbarButton}
          onClick={handleLoginButtonClick}
        >
          <i className='bx bxs-log-in'></i>
        </button>
        <NavLink className={style.nav} to='/carrito'>
          <button className={style.navbarButton}>
            <i class='bx bxs-cart'></i>
          </button>
        </NavLink>
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

      {/* Mostrar el formulario de inicio de sesión si showLoginForm es verdadero */}
      {showLoginForm && (
  <div className={style.loginOverlay}>
    <div className={style.loginContainer}>
      <LoginForm setShowLoginForm={setShowLoginForm} />
    </div>
  </div>
)}
    </div>
  );
};

export default Header;
