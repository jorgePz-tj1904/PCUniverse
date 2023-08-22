import React, { useState, useEffect } from 'react';
import style from './Header.module.css';
import logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import LoginForm from '../../pages/Login/LoginForm';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { logout } = useAuth0();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loged, setLoged] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // Agrega el estado para el menú

  useEffect(() => {
    changeLogin();
    loginHandle();
  }, []);

  const changeLogin = async () => {
    const storedValue = await localStorage.getItem('login');
    const isUserLoggedIn = storedValue === 'true';
    setLoged(isUserLoggedIn);
  }

  const handleLoginButtonClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  const loginHandle = async () => {
    const usuarioJSON = localStorage.getItem('usuario');
    if (usuarioJSON) {
      setLoged(true);
    }
    const usuario = await JSON.parse(usuarioJSON);
    console.log(usuario);
    console.log(usuario.email);
    if (usuario.email === 'somospixis123@gmail.com') {
      setAdmin(true);
      setLoged(true);
    }
  }

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
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
          {loged ? <i class='bx bxs-log-out'></i> : <i className='bx bxs-log-in'></i>}
        </button>
        {loged ? <><p>sesion iniciada</p></> : <><p>iniciar sesion</p></>}
        <NavLink className={style.nav} to='/carrito'>
          <button className={style.navbarButton}>
            <i className='bx bxs-cart'></i>
          </button>
        </NavLink>
      </div>
      <div className={`${style.mobileMenu} ${showMenu ? style.active : ''}`} onClick={handleMenuToggle}>
        <i className={showMenu ? 'bx bx-x' : 'bx bx-menu'}></i>
      </div>

      <nav className={`${style.mainNav} ${showMenu ? style.active : ''}`}>
        <div className="closeButton" onClick={handleMenuToggle}>
          <i className="fas fa-times"></i>
        </div>
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
