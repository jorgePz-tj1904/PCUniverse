import React, { useEffect, useState } from 'react';
import style from './Header.module.css';
import logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import LoginForm from '../../pages/Login/LoginForm';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loged, setLoged] = useState(false);
  const [admin, setAdmin] = useState(false);
  const { logout, isAuthenticated } = useAuth0(); // Obtener isAuthenticated
  const { user } = useAuth0();
  const emailAdmins = useSelector((state) => state.emailAdmins);

  useEffect(() => {
    if (isAuthenticated && !loged) {
      setLoged(true); // Marcar como iniciado de sesión
      window.location.reload(); // Recargar la página
    }

    loginHandle();
    console.log(emailAdmins);
  }, [isAuthenticated]);

  const handleLoginButtonClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  const loginHandle = async () => {
    const usuarioJSON = localStorage.getItem('usuario');

    if (usuarioJSON) {
      setLoged(true);
    }
    const usuario = await JSON.parse(usuarioJSON);

    if (usuario && emailAdmins.includes(usuario.email)) {
      setAdmin(true);
      setLoged(true);
    }
    if (user && user.email === 'somospixis123@gmail.com') {
      setAdmin(true);
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
        <SearchBar/> 

        {!loged&&<button id={style.iniciarSesion} className={style.botones} onClick={handleLoginButtonClick}><i className='bx bxs-log-out'></i>iniciar sesion</button>}

        {loged ? (
  <button
    className={style.botones}
    onClick={() => {
      logout({ returnTo: window.location.origin });
      localStorage.removeItem('usuario');
      localStorage.removeItem('login');
    }}
  >
    Cerrar sesión <i className='bx bxs-log-out'></i>
  </button>
) : null}
        <NavLink id={style.carrito} to='/carrito'>
            <i className='bx bxs-cart'></i>
        </NavLink>
      </div>

      <nav className={style.mainNav}>
        <ul>
          <li><NavLink to='/componentes'>PRODUCTOS</NavLink></li>
          <li><NavLink to='/form'>ARMA TU PC</NavLink></li>
          <li><NavLink to='/ayuda'>AYUDA</NavLink></li>
          <li><NavLink to='/contactanos'>CONTACTANOS</NavLink></li>
          <li><NavLink to='/nosotros'>¿QUIENES SOMOS?</NavLink></li>
          <li><NavLink to='/pcs'>BUILDS</NavLink></li>
          {admin ? <li><NavLink to='/admin'>PANEL DE CONTROL</NavLink></li> : null}
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

export default Header;