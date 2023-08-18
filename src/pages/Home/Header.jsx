import React, { useEffect, useState } from 'react';
import style from './Header.module.css';
import logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import LoginForm from '../../pages/Login/LoginForm';

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loged, setLoged] = useState(false);

  useEffect(()=>{
    loginHandler()
  },[loged]);

  const handleLoginButtonClick = () => {
    setShowLoginForm(!showLoginForm);
  };
  const loginHandler=()=>{
    const usuarioJSON = localStorage.getItem('usuario');
    if(usuarioJSON){
      setLoged(true);
    }
  }

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
          {loged?<i class='bx bxs-log-out'></i>:<i className='bx bxs-log-in'></i>}
        </button>
        {loged?<><p>sesion iniciada</p></>:<><p>iniciar sesion</p></>}
        <NavLink className={style.nav} to='/carrito'>
          <button className={style.navbarButton}>
            <i className='bx bxs-cart'></i>
          </button>
        </NavLink>
      </div>

      <nav className={style.mainNav}>
        <ul>
          <li><NavLink to='/componentes'>PRODUCTOS</NavLink></li>
          <li><NavLink to='/form'>ARMA TU PC</NavLink></li>
          <li><NavLink to='/ayuda'>AYUDA</NavLink></li>
          <li><NavLink to='/contactanos'>CONTACTANOS</NavLink></li>
          <li><NavLink to='/ofertas'>OFERTAS</NavLink></li>
          <li><NavLink to='/nosotros'>¿QUIENES SOMOS?</NavLink></li>
          <li><NavLink to='/pcs'>BUILDS</NavLink></li>
          <li><NavLink to='/admin'>PANEL DE CONTROL</NavLink></li>
        </ul>
      </nav>

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

